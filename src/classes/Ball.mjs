import { BALL_CONFIG } from "../config.mjs";

import { CanvasElement } from "./CanvasElement.mjs";
import { Paddle } from "./Paddle.mjs";
import { Bricks } from "./Bricks.mjs";

import { ballBlue } from "../assets.mjs";

/**
 * @extends CanvasElement
 */
export class Ball extends CanvasElement {
  /**
   *
   * @constructor
   * @param {CanvasRenderingContext2D} ctx
   * @param {HTMLCanvasElement} canvas
   * @returns {Ball}
   */
  constructor(ctx, canvas) {
    super(
      ctx,
      canvas.width / 2,
      canvas.height - 30,
      BALL_CONFIG.width,
      BALL_CONFIG.height,
      ballBlue
    );

    /**
     * @prop {HTMLCanvasElement} this.canvas
     */
    this.canvas = canvas;
    /**
     * @prop {number} this.speedX - Speed on the X-axis of the ball
     */
    this.speedX = BALL_CONFIG.speedX;
    /**
     * @prop {number} this.speedY - Speed on the Y-axis of the ball
     */
    this.speedY = BALL_CONFIG.speedY;
  }

  draw() {
    this.ctx.drawImage(
      this.sprite,
      BALL_CONFIG.sprite.xStart,
      BALL_CONFIG.sprite.yStart,
      BALL_CONFIG.sprite.width,
      BALL_CONFIG.sprite.height,
      this.x,
      this.y,
      this.width,
      this.height
    );
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

  /**
   * Ball collisions handling function
   *
   * @param {Paddle} paddle
   * @param {Bricks} bricks
   * @returns {void}
   */
  handleCollitions(paddle, bricks) {
    this._handleBricksCollition(bricks);
    this._handleWallCollitions();
    this._handlePaddleCollitions(paddle);
  }

  _handleBricksCollition(bricks) {
    for (const brickColumn of bricks) {
      for (const currentBrick of brickColumn) {
        if (currentBrick.isDestroyed()) continue;

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
    if (nextY > this.canvas.height) {
      document.location.reload();
    }
  }

  _handlePaddleCollitions(paddle) {
    const isBallSameXAsPaddle =
      this.x > paddle.x && this.x < paddle.x + paddle.width;

    const isBallTouchingPaddle = this.y + this.speedY > paddle.y;

    if (isBallSameXAsPaddle && isBallTouchingPaddle) this.changeYDirection();
  }
}
