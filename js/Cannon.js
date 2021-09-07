class Cannon {
  constructor(x, y, width, height, angle) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.angle = angle;
  }
  display() {
    console.log(this.angle);
    if(keyIsDown(RIGHT_ARROW) && this.angle < 0){
      this.angle += 0.02;
    }
    if(keyIsDown(LEFT_ARROW) && this.angle > -1.5){
      this.angle -= 0.02;
    }
    fill("#676e6a");
    push();
    translate(this.x, this.y);
    rotate(this.angle);
    rect(-27, -10, this.width, this.height);
    pop();
    arc(this.x - 30, this.y + 90, 140, 200, PI, TWO_PI);
    noFill();
  }
}
