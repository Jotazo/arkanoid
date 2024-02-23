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
    this.velocityX = BALL_CONFIG.velocityX;
    this.velocityY = BALL_CONFIG.velocityY;
  }

  draw() {
    this.ctx.beginPath();
    this.ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    this.ctx.fillStyle = BALL_CONFIG.color;
    this.ctx.fill();
    this.ctx.closePath();
  }

  move() {
    this.x += this.velocityX;
    this.y += this.velocityY;
  }

  changeXDirection() {
    this.velocityX = -this.velocityX;
  }

  changeYDirection() {
    this.velocityY = -this.velocityY;
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
    // Rebote paredes laterales
    if (
      this.x + this.velocityX > this.canvas.width - this.radius ||
      this.x + this.velocityX < this.radius
    )
      this.changeXDirection();

    // Rebote en la parte superior
    if (this.y + this.velocityY < this.radius) this.changeYDirection();

    // Rebote en la parte inferior
    if (this.y + this.velocityY > this.canvas.height - this.radius) {
      document.location.reload();
    }
  }

  _handlePaddleCollitions(paddle) {
    // la pelota toca la pala
    const isBallSameXAsPaddle =
      this.x > paddle.x && this.x < paddle.x + paddle.width;

    const isBallTouchingPaddle = this.y + this.velocityY > paddle.y;

    if (isBallSameXAsPaddle && isBallTouchingPaddle) this.changeYDirection();
  }
}
