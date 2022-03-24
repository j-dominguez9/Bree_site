var num = 60;
var mx = [];
var my = [];

function setup() {

  createCanvas(windowHeight, windowHeight);
  noStroke();
  fill('rgba(0,0,0, 0.5)');
  noCursor();

}

function draw() {

  background(255);

  var array_pos = (frameCount) % num;
  mx[array_pos] = mouseX;
  my[array_pos] = mouseY;


  for (var i = 0; i < num; i++) {
    var index = (array_pos + 1 + i) % num;
    ellipse(mx[index], my[index], i, i);
  }

}
