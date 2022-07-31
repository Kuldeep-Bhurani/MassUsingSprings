let bob;
let anchor;
let velocity;
let k = 0.01;
let gravity;
let c_width;
let c_height = 500;
let restLength = 150;

if(screen.width >= 700){
  c_width = 600;
}
if(screen.width < 700 && screen.width >= 510){
  c_width = 500;
}
if(screen.width < 500){
  c_width = 400;
}
if(screen.width < 411){
  c_width = 275;
  c_height = 350;
  restLength = 50;
}

function setup() {
  let canvas = createCanvas(c_width, c_height);
  bob = createVector(c_width/2, restLength);
  anchor = createVector(c_width/2, 0);
  canvas.parent('cnv-container');
  velocity = createVector(0, 0);
  gravity = createVector(0, 0.8);
}

function draw() {
  background(112, 50, 126);
  strokeWeight(2);
  stroke(255);
  line(anchor.x, anchor.y, bob.x, bob.y);
  fill(45, 197, 244);
  circle(anchor.x, anchor.y, 32);
  circle(bob.x, bob.y, 64);

  if ((mouseX > 0) && (mouseX < c_width) &&
  (mouseY > 0) && (mouseY < c_height)){
    if (mouseIsPressed) {
      bob.x = mouseX;
      bob.y = mouseY;
      velocity.set(0, 0);
    }
  }

  let force = p5.Vector.sub(bob, anchor);
  let x = force.mag() - restLength;
  force.normalize();
  force.mult(-1 * k * x);

  velocity.add(force);
  velocity.add(gravity);
  bob.add(velocity);
  velocity.mult(0.99);
}
