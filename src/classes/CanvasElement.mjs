export class CanvasElement {
  /**
   *
   * @constructor
   * @param {CanvasRenderingContext2D} ctx
   * @param {number} x - X position of the element
   * @param {number} y - Y position of the element
   * @param {number} width - Width of the element
   * @param {number} height - Height of the element
   * @param {HTMLImageElement} sprite - Image of the element
   * @returns {CanvasElement}
   */
  constructor(ctx, x, y, width, height, sprite) {
    /**
     * @prop {CanvasRenderingContext2D} ctx
     */
    this.ctx = ctx;
    /**
     * @prop {number} x - X position of the element
     */
    this.x = x;
    /**
     * @prop {number} y - Y position of the element
     */
    this.y = y;
    /**
     * @prop {number} width - Width of the element
     */
    this.width = width;
    /**
     * @prop {number} height - Height of the element
     */
    this.height = height;
    /**
     * @prop {HTMLImageElement} sprite - Image of the element
     */
    this.sprite = sprite;
  }

  /**
   * Draws the element on the canvas.
   * This method should be implemented by subclasses.
   * @return {void}
   */
  draw() {}

  /**
   * Moves the element.
   * This method should be implemented by subclasses.
   * @return {void}
   */
  move() {}
}
