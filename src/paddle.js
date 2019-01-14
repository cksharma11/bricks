class Paddle {
  constructor(height, width, bottom, left) {
    this.height = height;
    this.width = width;
    this.bottom = bottom;
    this.left = left;
  }

  moveLeft() {
    if (this.left > 0) this.left -= 10;
  }

  moveRight() {
    if (this.left < 760) this.left += 10;
  }

  isBetween(number) {
    return number > 0 && number < 200;
  }

  doesCollideWith(ball) {
    const difference = ball.x - this.left;
    return this.isBetween(difference) && ball.y < 25;
  }

  manageCollisionWith(ball) {
    const velocity = new Velocity(ball.velocity.x, ball.velocity.y);
    if (this.doesCollideWith(ball)) velocity.negateY();
    return velocity;
  }
}
