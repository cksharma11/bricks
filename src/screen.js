class Screen {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }

  doesRightOrLeftCollide(ball) {
    return ball.x == 920 || ball.x == 0;
  }
  doesTopOrBottomCollide(ball) {
    return ball.y == 559 || ball.y == 1;
  }

  collide(ball, velocity) {
    const newVelocity = new Velocity(velocity.x, velocity.y);
    if (this.doesTopOrBottomCollide(ball)) newVelocity.negateY();
    if (this.doesRightOrLeftCollide(ball)) newVelocity.negateX();
    return newVelocity;
  }
}
