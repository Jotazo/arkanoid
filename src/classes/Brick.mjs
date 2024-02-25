import { BRICK_CONFIG, BRICK_STATUS } from "../config.mjs";

import { redBrick } from "../assets.mjs";

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
   * @param {CanvasRenderingContext2D} ctx
   * @param {HTMLImageElement | null} sprite
   * @returns {Bricks}
   */
  constructor(x, y, width, height, status, ctx, sprite = redBrick) {
    this.ctx = ctx;

    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.status = status;

    this.sprite = sprite
  }

  draw() {
    this.ctx.drawImage(
      this.sprite,
      BRICK_CONFIG.sprite.xStart,
      BRICK_CONFIG.sprite.yStart,
      BRICK_CONFIG.sprite.width,
      BRICK_CONFIG.sprite.height,
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
