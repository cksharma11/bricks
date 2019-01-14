class Screen {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }

  doesRightCollide(ball) {
    return ball.x == 920;
  }
  doesTopCollide(ball) {
    return ball.y == 559;
  }
  doesBottomCollide(ball) {
    return ball.y == 1;
  }
  doesLeftCollide(ball) {
    return ball.x == 0;
  }

  collide(ball, velocity) {
    const newVelocity = new Velocity(velocity.x, velocity.y);
    if (this.doesTopCollide(ball)) newVelocity.negateY();
    if (this.doesBottomCollide(ball)) newVelocity.negateY();
    if (this.doesRightCollide(ball)) newVelocity.negateX();
    if (this.doesLeftCollide(ball)) newVelocity.negateX();
    return newVelocity;
  }
}
