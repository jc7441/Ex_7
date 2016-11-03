var iceberg;
var arctic;
var earth;
var warning;
//var world;
var x, y;
var s;
var warming = [];
var font;
var x2, y2;

function preload() {
  iceberg = loadImage("data/iceberg.png");
  arctic = loadImage("data/arctic.jpg");
  earth = loadImage("data/earth.jpg");
  font = loadFont("data/font0.otf");
  warning = loadImage("data/warning.png");
  //world = loadImage("data/map.png");
}

function setup() {
  createCanvas(1000, 600);
  background(255);
  x = -200; //iceberg
  y = 15; //iceberg
  s = .57; //scale
  x2 = -250; //text
  y2 = 580; //text
}

function draw() {
  //the iceberg floats in
  if (frameCount < 1000) {
    image(arctic, 0, 0);
    scale(s);
    image(iceberg, x, y);
    x++;
    //shaking/shifting movement of iceberg
    if (frameCount % 2 === 0) {
      y += 5;
    } else if (frameCount % 2 === 1) {
      y -= 5;
    }
    if (frameCount > 400) {
      s -= .0002; //iceberg melting
      x += .4;
      y += .45;
    }
  }
  //image of space view of earth appears
  if (frameCount > 1010) {
    image(earth, 0, 0);
    globalWarming();
    fill(255);
    strokeWeight(0);
    textFont(font, 30);
    text("WARNING!", x2, y2);
    x2 += 2; //moving banner right
    if (x2 > 1000) { //banner reappears on the left
      x2 = -250;
    }
    //when mouse is pressed, a warning symbol will appear
    if (mouseIsPressed) {
      image(warning, width / 2 - warning.width / 2, height / 2 - warning.height / 2);
    }
  }
} //draw closer

//appearing viruses
function globalWarming() {
  for (var i = 0; i < 1; i++) {
    var bug = new Virus(createVector(random(0, width), random(0, height)));
    warming.push(bug);
  }
  for (i = 0; i < warming.length; i++) {
    warming[i].update();
  }
}