/* BALLS ASSETS */
const ballBlue = new Image();
ballBlue.src = "../assets/balls/ballBlue.png";
const ballGrey = new Image();
ballGrey.src = "../assets/balls/ballGrey.png";

/* PADDLES ASSETS */
const paddleRed = new Image();
paddleRed.src = "../assets/paddles/paddleRed.png";
const paddleBlue = new Image();
paddleBlue.src = "../assets/paddles/paddleBlue.png";

/* BRICKS ASSETS */
const greenBrick = new Image();
greenBrick.src = "../assets/bricks/greenBrick.png";
const greenBrickGlossy = new Image();
greenBrickGlossy.src = "../assets/bricks/greenBrickGlossy.png";
const greyBrick = new Image();
greyBrick.src = "../assets/bricks/greyBrick.png";
const greyBrickGlossy = new Image();
greyBrickGlossy.src = "../assets/bricks/greyBrickGlossy.png";
const purpleBrick = new Image();
purpleBrick.src = "../assets/bricks/purpleBrick.png";
const purpleBrickGlossy = new Image();
purpleBrickGlossy.src = "../assets/bricks/purpleBrickGlossy.png";
const redBrick = new Image();
redBrick.src = "../assets/bricks/redBrick.png";
const redBrickGlossy = new Image();
redBrickGlossy.src = "../assets/bricks/redBrickGlossy.png";
const yellowBrick = new Image();
yellowBrick.src = "../assets/bricks/yellowBrick.png";
const yellowBrickGlossy = new Image();
yellowBrickGlossy.src = "../assets/bricks/yellowBrickGlossy.png";

const BRICKS = {
  normal: [greenBrick, greyBrick, purpleBrick, redBrick, yellowBrick],
  glossy: [
    greenBrickGlossy,
    greyBrickGlossy,
    purpleBrickGlossy,
    redBrickGlossy,
    yellowBrickGlossy,
  ],
};

export { ballBlue, ballGrey, paddleBlue, paddleRed, redBrick, BRICKS };
