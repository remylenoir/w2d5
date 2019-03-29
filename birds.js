/* eslint-disable */
let img;
function setup() {
  createCanvas(640, 640);
  frameRate(60);
  background(230);
  img = loadImage("assets/bird.png");
}

const ACCELERATION = 0.5;
let ypos = 0;
let velocity = 0;

function draw() {
  clear();
  background(230);

  fill(0);
  if (ypos > 640) {
    ypos = 0;
    velocity = 0;
  }
  velocity += ACCELERATION;

  if (mouseIsPressed) {
    // ypos -= 4;
  } else {
    // ypos += 4;
  }

  yPost += velocity;

  image(img, 300, ypos, img.width / 7, img.height / 7);
}
