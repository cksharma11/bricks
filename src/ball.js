class Ball {
  constructor(radius, x, y, velocity) {
    this.height = radius;
    this.width = radius;
    this.x = x;
    this.y = y;
    this.velocity = velocity;
  }
  move() {
    this.x += this.velocity.x;
    this.y += this.velocity.y;
  }

  setVelocity(velocity) {
    this.velocity = velocity;
  }
}
