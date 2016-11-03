var Virus = function(position) {
  this.velocity = createVector(random(2, 3), random(2, 3));
  this.position = position.copy();
  var grow = 10;

  this.update = function() {
    this.display();
    grow += .01;
  }

  this.display = function() {
    stroke(200, 0, 0);
    strokeWeight(3);
    fill(120, 0, 0, 150);
    ellipse(this.position.x, this.position.y, grow, grow);
  }
}