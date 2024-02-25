/* -- GAME -- */
export const GAME_CONFIG = {
  width: 448,
  height: 400,
};

/* -- BALL -- */
export const BALL_CONFIG = {
  radius: 3,
  speedX: 3,
  speedY: -3,
  sprite: {
    spriteXStart: 0,
    spriteYStart: 0,
    spriteWidth: 22,
    spriteHeight: 22,
  },
  height: 8,
  width: 8,
};

/* -- BRICKS -- */
export const BRICKS_CONFIG = {
  rowCount: 6,
  columnCount: 13,
  offsetTop: 80,
  offsetLeft: 16,
  padding: 0,
};

export const BRICK_CONFIG = {
  width: 32,
  height: 16,
};

export const BRICK_STATUS = {
  ACTIVE: 1,
  DESTROYED: 0,
};

export const PADDLE_CONFIG = {
  width: 50,
  height: 10,
  clipX: 29,
  clipY: 174,
  sensitivity: 7,
};
