import { BRICKS } from "../assets.mjs";

/**
 * Function that returns a random block
 *
 * @param {HTMLImageElement[]?} bricks
 * @returns {HTMLImageElement}
 */
const getRandomBrick = (bricks = BRICKS.normal) => {
  const randomBrickSpriteIndex = Math.floor(Math.random() * bricks.length);
  return bricks[randomBrickSpriteIndex];
};

export default getRandomBrick;
