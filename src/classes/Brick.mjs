import { BRICK_CONFIG, BRICK_STATUS } from "../config.mjs";

import { CanvasElement } from "./CanvasElement.mjs";

import { redBrick } from "../assets.mjs";

export class Brick extends CanvasElement {
  /**
   *
   * @constructor
   * @param {number} x - X position of the brick
   * @param {number} y - Y position of the brick
   * @param {number} width - Width of the brick
   * @param {number} height - Height of the brick
   * @param {number} status - Status of the brick
   * @param {CanvasRenderingContext2D} ctx
   * @param {HTMLImageElement | null} sprite
   * @returns {Brick}
   */
  constructor(x, y, width, height, status, ctx, sprite = redBrick) {
    super(ctx, x, y, width, height, sprite);

    /**
     * @type {BRICK_STATUS} this.status - Status of the brick
     */
    this.status = status;
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
