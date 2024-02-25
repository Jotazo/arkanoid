import { BRICKS_CONFIG, BRICK_CONFIG, BRICK_STATUS } from "../config.mjs";

import { Brick } from "./Brick.mjs";

import getRandomBrick from "../helpers/getRandomBrick.mjs";

export class Bricks {
  /**
   *
   * @constructor
   * @param {CanvasRenderingContext2D} ctx
   * @returns {Bricks}
   */
  constructor(ctx) {
    /**
     * @prop {CanvasRenderingContext2D} this.ctx
     */
    this.ctx = ctx;
    /**
     * @typedef {Brick[]} BrickColumn
     * @typedef {BrickColumn[]} BrickGrid
     *
     * @type {BrickGrid}
     */
    this.bricks = [];

    this._generateBricks();
  }

  draw() {
    for (const brickColumn of this.bricks) {
      for (const currentBrick of brickColumn) {
        if (currentBrick.isDestroyed()) continue;
        currentBrick.draw();
      }
    }
  }

  getBricks() {
    return this.bricks;
  }

  _generateBricks() {
    for (let c = 0; c < BRICKS_CONFIG.columnCount; c++) {
      this.bricks[c] = [];
      for (let r = 0; r < BRICKS_CONFIG.rowCount; r++) {
        // We calculate the position of the brick on the screen
        const brickX = c * BRICK_CONFIG.width + BRICKS_CONFIG.offsetLeft;
        const brickY = r * BRICK_CONFIG.height + BRICKS_CONFIG.offsetTop;
        // We store the information of each brick
        const randomBrick = getRandomBrick();
        this.bricks[c][r] = new Brick(
          brickX,
          brickY,
          BRICK_CONFIG.width,
          BRICK_CONFIG.height,
          BRICK_STATUS.ACTIVE,
          this.ctx,
          randomBrick
        );
      }
    }
  }
}
