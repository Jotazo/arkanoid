import { GAME_CONFIG } from "../config.mjs";
import { MIDU_SCREEN } from "../screens.mjs";

import { Ball } from "./Ball.mjs";
import { Bricks } from "./Bricks.mjs";
import { Paddle } from "./Paddle.mjs";

export class Game {
  constructor() {
    this.canvas = document.querySelector("canvas");
    this.ctx = this.canvas.getContext("2d");

    this.canvas.width = GAME_CONFIG.width;
    this.canvas.height = GAME_CONFIG.height;

    this.ball = new Ball(this.canvas, this.ctx);
    this.paddle = new Paddle(this.canvas, this.ctx);
    this.bricks = new Bricks(this.ctx, MIDU_SCREEN);
  }

  start() {
    this._draw();
  }

  _cleanCanvas() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }

  _draw() {
    this._cleanCanvas();

    // dibujar elementos
    this.ball.draw();
    this.paddle.draw();
    this.bricks.draw();

    // colisiones y movimientos
    this.ball.handleCollitions(this.paddle, this.bricks.getBricks());

    this.ball.move();
    this.paddle.move();
    window.requestAnimationFrame(this._draw.bind(this));
  }
}
