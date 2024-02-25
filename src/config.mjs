/**
 * Canvas configuration
 *
 * @typedef {Object} GameConfig
 * @property {number} width - Canvas width
 * @property {number} height - Canvas height
 */

/**
 * Sprite configuration
 *
 * @typedef {Object} SpriteConfig
 * @property {number} xStart - Initial x position of the sprite
 * @property {number} yStart - Initial y position of the sprite
 * @property {number} width - Sprite width
 * @property {number} height - Sprite height
 */

/**
 * Ball configuration
 *
 * @typedef {Object} BallConfig
 * @property {number} width - Ball width
 * @property {number} height - Ball height
 * @property {number} speedX - Speed on the X axis of the ball
 * @property {number} speedY - Speed on the Y axis of the ball
 * @property {SpriteConfig} sprite
 */

/**
 * Configuration of the brick list
 * 
 * @typedef {Object} BricksConfig
 * @property {number} rowCount - Number of rows
 * @property {number} columnCount - Number of columns
 * @property {number} offsetTop - Top padding
 * @property {number} offsetLeft - Left padding
 */

/**
 * Configuration of the bricks
 * 
 * @typedef {Object} BrickConfig
 * @property {number} width - Brick width
 * @property {number} height - Brick height
 * @property {SpriteConfig} sprite
 */

/**
 * Paddle configuration
 * 
 * @typedef {Object} PaddleConfig
 * @property {number} width - Paddle width
 * @property {number} height - Paddle height
 * @property {number} sensitivity - Sensitivity of paddle movement
 * @property {SpriteConfig} sprite
 */

/* -- GAME -- */
/**
 * @type {GameConfig}
 */
export const GAME_CONFIG = {
  width: 448,
  height: 400,
};

/* -- BALL -- */
/**
 * @type {BallConfig}
 */
export const BALL_CONFIG = {
  width: 10,
  height: 10,
  speedX: 3,
  speedY: -3,
  sprite: {
    xStart: 0,
    yStart: 0,
    width: 22,
    height: 22,
  },
};

/* -- BRICKS -- */
/**
 * @type {BricksConfig}
 */
export const BRICKS_CONFIG = {
  rowCount: 6,
  columnCount: 13,
  offsetTop: 80,
  offsetLeft: 16,
};

/**
 * @type {BrickConfig}
 */
export const BRICK_CONFIG = {
  width: 32,
  height: 16,
  sprite: {
    xStart: 0,
    yStart: 0,
    width: 64,
    height: 32,
  },
};

/**
 * Brick states
 *
 * @enum {number}
 */
export const BRICK_STATUS = {
  ACTIVE: 1,
  DESTROYED: 0,
};

/* -- PADDLE -- */
/**
 * @type {PaddleConfig}
 */
export const PADDLE_CONFIG = {
  width: 65,
  height: 10,
  sensitivity: 7,
  sprite: {
    xStart: 0,
    yStart: 0,
    width: 104,
    height: 24,
  },
};
