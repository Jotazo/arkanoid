/**
 * Configuración del canvas
 *
 * @typedef {Object} GameConfig
 * @property {number} width - Ancho del canvas
 * @property {number} height - Alto del canvas
 */

/**
 * Configuración de los Sprite
 *
 * @typedef {Object} SpriteConfig
 * @property {number} xStart - Posición x inicial del sprite
 * @property {number} yStart - Posición y inicial del sprite
 * @property {number} width - Ancho del sprite
 * @property {number} height - Alto del sprite
 */

/**
 * Configuración de la pelota
 *
 * @typedef {Object} BallConfig
 * @property {number} width - Ancho de la pelota
 * @property {number} height - Alto de la pelota
 * @property {number} speedX - Velocidad en el eje X de la pelota
 * @property {number} speedY - Velocidad en el eje Y de la pelota
 * @property {SpriteConfig} sprite
 */

/**
 * Configuración del listado de bloques
 * 
 * @typedef {Object} BricksConfig
 * @property {number} rowCount - Numero de filas
 * @property {number} columnCount - Numero de columnas
 * @property {number} offsetTop - Padding superior
 * @property {number} offsetLeft - Padding izquierdo
 */

/**
 * Configuración de los bloques
 * 
 * @typedef {Object} BrickConfig
 * @property {number} width - Ancho del bloque
 * @property {number} height - Alto del bloque
 * @property {SpriteConfig} sprite
 */

/**
 * Configuración del paddle
 * 
 * @typedef {Object} PaddleConfig
 * @property {number} width - Ancho del paddle
 * @property {number} height - Alto del paddle
 * @property {number} sensitivity - Sensibilidad del movimiento del paddle
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
 * Estados de los bloques
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
