class Ball {
  constructor(radius, positionX, positionY, velocity) {
    this.height = radius;
    this.width = radius;
    this.positionX = positionX;
    this.positionY = positionY;
    this.velocity = velocity;
  }
  move() {
    this.positionX += this.velocity.x;
    this.positionY += this.velocity.y;
  }

  setVelocity(velocity) {
    this.velocity = velocity;
  }

  getVelocityX() {
    return this.velocity.x;
  }

  getVelocityY() {
    return this.velocity.y;
  }

  getPositionX() {
    return this.positionX;
  }

  getPositionY() {
    return this.positionY;
  }
}
