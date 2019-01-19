class Screen {
  constructor(height, width) {
    this.height = height;
    this.width = width;
    this.lifeCount = 3;
  }

  decreaseLifeCount() {
    this.lifeCount -= 1;
  }

  doesRightOrLeftCollide(ball) {
    return ball.getPositionX() == 920 || ball.getPositionX() == 0;
  }
  doesTopCollide(ball) {
    return ball.getPositionY() == 559;
  }

  doesBottomCollide(ball) {
    return ball.getPositionY() == 1;
  }

  manageCollisionWith(ball, velocity) {
    const newVelocity = new Velocity(velocity.x, velocity.y);
    if (this.doesTopCollide(ball)) newVelocity.negateY();
    if (this.doesRightOrLeftCollide(ball)) newVelocity.negateX();
    if (this.doesBottomCollide(ball)) {
      newVelocity.negateY();
      this.decreaseLifeCount();
    }
    return newVelocity;
  }
}
