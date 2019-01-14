class Brick {
  constructor(height, width, x, y) {
    this.height = height;
    this.width = width;
    this.x = x;
    this.y = y;
  }

  isBetween(number) {
    return number > 0 && number < 100;
  }

  doesCollideWith(ball) {
    const difference = ball.x - this.x;
    return this.isBetween(difference) && ball.y > 539;
  }
}
