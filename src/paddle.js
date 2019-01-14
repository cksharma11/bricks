class Paddle {
  constructor(height, width, bottom, left, speed = 10) {
    this.height = height;
    this.width = width;
    this.bottom = bottom;
    this.left = left;
    this.speed = speed;
  }

  moveLeft() {
    this.left = Math.max(0, this.left - this.speed);
  }

  moveRight() {
    this.left = Math.min(760, this.left + this.speed);
  }

  isWithinRange(difference) {
    return difference > 0 && difference < this.width;
  }

  doesCollideWith(ball) {
    const difference = ball.getPositionX() - this.left;
    return this.isWithinRange(difference) && ball.getPositionY() < this.height;
  }

  manageCollisionWith(ball) {
    const velocity = new Velocity(ball.getVelocityX(), ball.getVelocityY());
    if (this.doesCollideWith(ball)) velocity.negateY();
    return velocity;
  }
}
