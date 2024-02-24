import { BALL_CONFIG } from "../config.mjs";

export class Ball {
  /**
   * Constructor de la clase Ball
   *
   * @constructor
   * @param {HTMLCanvasElement} canvas
   * @param {CanvasRenderingContext2D} ctx
   * @returns {Ball}
   */
  constructor(canvas, ctx) {
    this.canvas = canvas;
    this.ctx = ctx;

    this.x = this.canvas.width / 2;
    this.y = this.canvas.height - 30;
    this.radius = BALL_CONFIG.radius;
    this.speedX = BALL_CONFIG.speedX;
    this.speedY = BALL_CONFIG.speedY;
  }

  draw() {
    this.ctx.beginPath();
    this.ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    this.ctx.fillStyle = BALL_CONFIG.color;
    this.ctx.fill();
    this.ctx.closePath();
  }

  move() {
    this.x += this.speedX;
    this.y += this.speedY;
  }

  changeXDirection() {
    this.speedX = -this.speedX;
  }

  changeYDirection() {
    this.speedY = -this.speedY;
  }

  handleCollitions(paddle, bricks) {
    this._handleBricksCollition(bricks);
    this._handleWallCollitions();
    this._handlePaddleCollitions(paddle);
  }

  _handleBricksCollition(bricks) {
    for (const brickColumn of bricks) {
      for (const currentBrick of brickColumn) {
        if (currentBrick.isDestroyed()) continue;

        // La pelota toca la pala
        const isBallSameXAsBrick =
          this.x > currentBrick.x &&
          this.x < currentBrick.x + currentBrick.width;

        const isBallSameYAsBrick =
          this.y > currentBrick.y &&
          this.y < currentBrick.y + currentBrick.height;

        if (isBallSameXAsBrick && isBallSameYAsBrick) {
          this.changeYDirection();
          currentBrick.destroy();
        }
      }
    }
  }

  _handleWallCollitions() {
    this._handleRightWallCollition();
    this._handleLeftWallCollition();
    this._handleTopWallCollition();
    this._handleBottomCollition();
  }

  _handleRightWallCollition() {
    const nextX = this.x + this.speedX;
    if (nextX > this.canvas.width) this.changeXDirection();
  }

  _handleLeftWallCollition() {
    const nextX = this.x + this.speedX;
    if (nextX < 0) this.changeXDirection();
  }

  _handleTopWallCollition() {
    const nextY = this.y + this.speedY;
    if (nextY < 0) this.changeYDirection();
  }

  _handleBottomCollition() {
    const nextY = this.y + this.speedY;
    if (nextY > this.canvas.height + this.radius) {
      document.location.reload();
    }
  }

  _handlePaddleCollitions(paddle) {
    // la pelota toca la pala
    const isBallSameXAsPaddle =
      this.x > paddle.x && this.x < paddle.x + paddle.width;

    const isBallTouchingPaddle = this.y + this.speedY > paddle.y;

    if (isBallSameXAsPaddle && isBallTouchingPaddle) this.changeYDirection();
  }
}
