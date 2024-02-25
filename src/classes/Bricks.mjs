import { BRICKS_CONFIG, BRICK_CONFIG, BRICK_STATUS } from "../config.mjs";

import { Brick } from "./Brick.mjs";

import getRandomBrick from "../helpers/getRandomBrick.mjs";

export class Bricks {
  /**
   * Constructor de la clase Bricks
   *
   * @constructor
   * @param {CanvasRenderingContext2D} ctx
   * @returns {Bricks}
   */
  constructor(ctx, screen) {
    this.ctx = ctx;
    this.bricks = [];
    this.screen = screen;

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
        // Calculamos la posicion del ladrillo en la pantalla
        const brickX = c * BRICK_CONFIG.width + BRICKS_CONFIG.offsetLeft;
        const brickY = r * BRICK_CONFIG.height + BRICKS_CONFIG.offsetTop;
        // Guardamos la informacion de cada ladrillo
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
