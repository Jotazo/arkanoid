import { PADDLE_CONFIG } from "../config.mjs";

import { CanvasElement } from "./CanvasElement.mjs";
import { Keyboard } from "./Keyboard.mjs";

import { paddleRed } from "../assets.mjs";

export class Paddle extends CanvasElement {
  /**
   *
   * @constructor
   * @param {HTMLCanvasElement} canvas
   * @param {CanvasRenderingContext2D} ctx
   * @returns {Paddle}
   */
  constructor(canvas, ctx) {
    super(
      ctx,
      (canvas.width - PADDLE_CONFIG.width) / 2,
      canvas.height - PADDLE_CONFIG.height - 10,
      PADDLE_CONFIG.width,
      PADDLE_CONFIG.height,
      paddleRed
    );

    /**
     * @prop {HTMLCanvasElement} this.canvas
     */
    this.canvas = canvas;
    /**
     * @prop {number} this.sensitivity
     */
    this.sensitivity = PADDLE_CONFIG.sensitivity;
    /**
     * @prop {Keyboard} this._keyboard
     */
    this._keyboard = new Keyboard();
  }

  draw() {
    this.ctx.drawImage(
      this.sprite,
      PADDLE_CONFIG.sprite.xStart,
      PADDLE_CONFIG.sprite.yStart,
      PADDLE_CONFIG.sprite.width,
      PADDLE_CONFIG.sprite.height,
      this.x,
      this.y,
      this.width,
      this.height
    );
  }

  move() {
    const isRightPressed = this._keyboard.getRightPressed();
    const isLeftPressed = this._keyboard.getLeftPressed();

    if (isRightPressed && this.x + this.width < this.canvas.width) {
      this._moveRight();
    } else if (isLeftPressed && this.x > 0) {
      this._moveLeft();
    }
  }

  _moveRight() {
    this.x += this.sensitivity;
  }

  _moveLeft() {
    this.x -= this.sensitivity;
  }
}
