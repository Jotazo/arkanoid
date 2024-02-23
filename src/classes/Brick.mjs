import { BRICK_STATUS } from "../config.mjs";

export class Brick {
  /**
   * Constructor de la clase Brick
   *
   * @constructor
   * @param {number} x
   * @param {number} y
   * @param {number} width
   * @param {number} height
   * @param {number} status
   * @param {number} color
   * @param {CanvasRenderingContext2D} ctx
   * @returns {Bricks}
   */
  constructor(x, y, width, height, status, color, ctx) {
    this.ctx = ctx;

    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.status = status;
    this.color = color;

    this.sprite = document.querySelector("#bricks");
  }

  draw() {
    const clipX = this.color * 32;

    this.ctx.drawImage(
      this.sprite,
      clipX,
      0,
      this.width,
      this.height,
      this.x,
      this.y,
      this.width,
      this.height
    );
  }

  destroy() {
    this.status = BRICK_STATUS.DESTROYED;
  }

  isDestroyed() {
    return this.status === BRICK_STATUS.DESTROYED;
  }
}
