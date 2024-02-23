import { PADDLE_CONFIG } from "../config.mjs";

import { Keyboard } from "./Keyboard.mjs";

export class Paddle {
  /**
   * Constructor de la clase Paddle
   *
   * @constructor
   * @param {HTMLCanvasElement} canvas
   * @param {CanvasRenderingContext2D} ctx
   * @returns {Paddle}
   */
  constructor(canvas, ctx) {
    this.canvas = canvas;
    this.ctx = ctx;

    this.width = PADDLE_CONFIG.width;
    this.height = PADDLE_CONFIG.height;
    this.x = (this.canvas.width - this.width) / 2;
    this.y = this.canvas.height - this.height - 10;
    this.clipX = PADDLE_CONFIG.clipX;
    this.clipY = PADDLE_CONFIG.clipY;
    this.sensitivity = PADDLE_CONFIG.sensitivity;

    this.sprite = document.querySelector("#sprite");

    this._keyboard = new Keyboard();
  }

  draw() {
    this.ctx.drawImage(
      this.sprite, // Imagen
      this.clipX, // Coordenadas de recorte
      this.clipY, // Coordenadas de recorte
      this.width, // Tamaño recorte
      this.height, // Tamaño recorte
      this.x, // Posicion X del dibujo
      this.y, // Posicion Y del dibujo
      this.width, // Ancho del dibujo
      this.height // Alto del dibujo
    );
  }

  move() {
    const isRightPressed = this._keyboard.getRightPressed();
    const isLeftPressed = this._keyboard.getLeftPressed();

    if (isRightPressed && this.x < this.canvas.width - this.width) {
      this._moveRight();
    } else if (isLeftPressed && this.x > 0) {
      this._moveLeft();
    }
  }

  _moveRight() {
    this.x += this.sensitivity;
  }

  _moveLeft() {
    this.x -= this.sensitivity;
  }
}
