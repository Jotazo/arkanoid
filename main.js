const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

const $sprite = document.querySelector("#sprite");
const $bricks = document.querySelector("#bricks");

canvas.width = 448;
canvas.height = 400;

/* Variables de nuestro juego */

/* Variables de la PELOTA */

const ballRadius = 3;
let ballX = canvas.width / 2;
let ballY = canvas.height - 30;
let ballDX = 3;
let ballDY = -3;

/* VARIABLES DE LA PALETA */
const paddleHeight = 10;
const paddleWidth = 50;

let paddleX = (canvas.width - paddleWidth) / 2;
let paddleY = canvas.height - paddleHeight - 10;

let rightPressed = false;
let leftPressed = false;

const PADDLE_SENSITIVITY = 8;

/* VARIABLES DE LOS LADRILLOS */
const brickRowCount = 6;
const brickColumnCount = 13;
const brickWidth = 32;
const brickHeight = 16;
const brickPadding = 0;
const brickOffsetTop = 80;
const brickOffsetLeft = 16;
const bricks = [];

const BRICK_STATUS = {
  ACTIVE: 1,
  DESTROYED: 0,
};

for (let c = 0; c < brickColumnCount; c++) {
  bricks[c] = []; // inicializamos con un array vacío
  for (let r = 0; r < brickRowCount; r++) {
    // calculamos la posicion del ladrillo en la pantalla
    const brickX = c * (brickWidth + brickPadding) + brickOffsetLeft;
    const brickY = r * (brickHeight + brickPadding) + brickOffsetTop;
    // Asignar un color aleatorio al ladrillo
    const random = Math.floor(Math.random() * 8);
    // Guardamos la informacion de cada ladrillo
    bricks[c][r] = {
      brickX,
      brickY,
      status: BRICK_STATUS.ACTIVE,
      color: random,
    };
  }
}

function drawBall() {
  ctx.beginPath();
  ctx.arc(ballX, ballY, ballRadius, 0, Math.PI * 2);
  ctx.fillStyle = "#fff";
  ctx.fill();
  ctx.closePath();
}

function drawPaddle() {
  ctx.drawImage(
    $sprite, // imagen
    29, // clipX: Coordenadas de recorte
    174, // clipY: Coordenadas de recorte
    paddleWidth, // Tamaño recorte
    paddleHeight, // Tamaño recorte
    paddleX, // Posicion X del dibujo
    paddleY, // Posicion Y del dibujo
    paddleWidth, // ancho del dibujo
    paddleHeight // alto del dibujo
  );
}

function drawBricks() {
  for (let c = 0; c < brickColumnCount; c++) {
    for (let r = 0; r < brickRowCount; r++) {
      const currentBrick = bricks[c][r];
      if (currentBrick.status === BRICK_STATUS.DESTROYED) continue;

      const clipX = currentBrick.color * 32;

      ctx.drawImage(
        $bricks,
        clipX,
        0,
        brickWidth,
        brickHeight,
        currentBrick.brickX,
        currentBrick.brickY,
        brickWidth,
        brickHeight
      );
    }
  }
}

function collisionDetection() {
  for (let c = 0; c < brickColumnCount; c++) {
    for (let r = 0; r < brickRowCount; r++) {
      const currentBrick = bricks[c][r];
      if (currentBrick.status === BRICK_STATUS.DESTROYED) continue;

      // la pelota toca la pala
      const isBallSameXAsBrick =
        ballX > currentBrick.brickX && ballX < currentBrick.brickX + brickWidth;

      const isBallSameYAsBrick =
        ballY > currentBrick.brickY &&
        ballY < currentBrick.brickY + brickHeight;
      if (isBallSameXAsBrick && isBallSameYAsBrick) {
        ballDY = -ballDY;
        currentBrick.status = BRICK_STATUS.DESTROYED;
      }
    }
  }
}
function ballMovement() {
  // rebotar las pelotas en los laterales
  if (
    ballX + ballDX > canvas.width - ballRadius ||
    ballX + ballDX < ballRadius
  ) {
    ballDX = -ballDX;
  }

  // rebotar en la parte superior
  if (ballY + ballDY < ballRadius) {
    ballDY = -ballDY;
  }

  // la pelota toca la pala
  const isBallSameXAsPaddle = ballX > paddleX && ballX < paddleX + paddleWidth;

  const isBallTouchingPaddle = ballY + ballDY > paddleY;

  if (isBallSameXAsPaddle && isBallTouchingPaddle) {
    ballDY = -ballDY;
  } else if (ballY + ballDY > canvas.height - ballRadius) {
    console.log("Game Over");
    document.location.reload();
  }

  ballX += ballDX;
  ballY += ballDY;
}
function paddleMovement() {
  if (rightPressed && paddleX < canvas.width - paddleWidth) {
    paddleX += PADDLE_SENSITIVITY;
  } else if (leftPressed && paddleX > 0) {
    paddleX -= PADDLE_SENSITIVITY;
  }
}

function cleanCanvas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function initEvents() {
  document.addEventListener("keydown", keyDownHandler);
  document.addEventListener("keyup", keyUpHandler);

  function keyDownHandler(event) {
    const { key } = event;
    if (key === "Right" || key === "ArrowRight") {
      rightPressed = true;
    } else if (key === "Left" || key === "ArrowLeft") {
      leftPressed = true;
    }
  }

  function keyUpHandler(event) {
    const { key } = event;
    if (key === "Right" || key === "ArrowRight") {
      rightPressed = false;
    } else if (key === "Left" || key === "ArrowLeft") {
      leftPressed = false;
    }
  }
}

function draw() {
  cleanCanvas();
  // dibujar elementos
  drawBall();
  drawPaddle();
  drawBricks();

  // colisiones y movimientos
  collisionDetection();
  ballMovement();
  paddleMovement();

  window.requestAnimationFrame(draw);
}

draw();
initEvents();
