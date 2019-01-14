class Screen {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }

  doesRightOrLeftCollide(ball) {
    return ball.getPositionX() == 920 || ball.getPositionX() == 0;
  }
  doesTopOrBottomCollide(ball) {
    return ball.getPositionY() == 559 || ball.getPositionY() == 1;
  }

  collide(ball, velocity) {
    const newVelocity = new Velocity(velocity.x, velocity.y);
    if (this.doesTopOrBottomCollide(ball)) newVelocity.negateY();
    if (this.doesRightOrLeftCollide(ball)) newVelocity.negateX();
    return newVelocity;
  }
}
