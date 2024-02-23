export class Keyboard {
  constructor() {
    this.rightPressed = false;
    this.leftPressed = false;
    this._initEvents();
  }

  _initEvents() {
    document.addEventListener("keydown", this._keyDownHandler.bind(this));
    document.addEventListener("keyup", this._keyUpHandler.bind(this));
  }

  _keyDownHandler(event) {
    const { key } = event;
    if (key === "Right" || key === "ArrowRight") {
      this._setRightPressed(true);
    } else if (key === "Left" || key === "ArrowLeft") {
      this._setLeftPressed(true);
    }
  }

  _keyUpHandler(event) {
    const { key } = event;
    if (key === "Right" || key === "ArrowRight") {
      this._setRightPressed(false);
    } else if (key === "Left" || key === "ArrowLeft") {
      this._setLeftPressed(false);
    }
  }

  /* Getters */
  getRightPressed() {
    return this.rightPressed;
  }

  getLeftPressed() {
    return this.leftPressed;
  }

  /* Setters */
  _setRightPressed(isPressed) {
    this.rightPressed = isPressed;
  }
  _setLeftPressed(isPressed) {
    this.leftPressed = isPressed;
  }
}
