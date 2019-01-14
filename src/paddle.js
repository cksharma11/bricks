class Paddle {
  constructor(height, width, bottom, left) {
    this.height = height;
    this.width = width;
    this.bottom = bottom;
    this.left = left;
  }

  moveLeft() {
    this.left = Math.max(0, this.left - 10);
  }

  moveRight() {
    this.left = Math.min(760, this.left + 10);
  }

  isWithinRange(number) {
    return number > 0 && number < 200;
  }

  doesCollideWith(ball) {
    const difference = ball.x - this.left;
    return this.isWithinRange(difference) && ball.y < 25;
  }

  manageCollisionWith(ball) {
    const velocity = new Velocity(ball.velocity.x, ball.velocity.y);
    if (this.doesCollideWith(ball)) velocity.negateY();
    return velocity;
  }
}
