import { BRICKS } from "../assets.mjs";

/**
 * Función que retorna un bloque aleatorio
 *
 * @param {HTMLImageElement[]} bricks
 * @returns {HTMLImageElement}
 */
const getRandomBrick = (bricks = BRICKS.normal) => {
  const randomBrickSpriteIndex = Math.floor(Math.random() * bricks.length);
  return bricks[randomBrickSpriteIndex];
};

export default getRandomBrick;
