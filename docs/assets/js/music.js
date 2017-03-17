var t = 0;
var d = 250;

function setup() {
  var canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent(document.getElementsByTagName('body')[0]);
  stroke(41, 150, 204, 120);
  noFill();
  frameRate(30);
}

function draw() {
  background(255, 15);
  beginShape();
  for (var i = 0; i < d; i++) {
    var x = map(i, 0, d, 0, width);
    var y = map(noise(i * 0.01, t * 0.005), 0, 1, 0, height) + map(i, 0, d, -height/4, height/2);
    curveVertex(x, y);
  }
  endShape(OPEN);

  t += 1;

    }
