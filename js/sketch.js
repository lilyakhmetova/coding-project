function setup() {
  createCanvas(1000, 800, WEBGL);

  frameRate(10);
}

function draw() {
  // background(0);

  rotateX(frameCount * 0.05);
  rotateY(frameCount * 0.05);
  rotateZ(frameCount * 0.05);

  for (let i = 0; i < 40; i++) {
  createBubble(0, 0, 12 * i + 10, 12 * i + 10, random(0.1, 2), {r: random(mouseX / 5, 255), g: 0, b: random(mouseX / 5, 255), });
  }
}


function createBubble(x, y, d, e, s, col) {
 strokeWeight(s);
  noFill();
  stroke(col.r, col.g, col.b);
  rectMode(CENTER);
  rect(x + random(-0.5, +0.5), y + random(-0.5, +0.5), d, e);

}

function mousePressed() {
  background(0);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
