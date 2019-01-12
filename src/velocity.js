class Velocity {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  moveHorizontal() {
    this.x *= -1;
  }
  moveVertical() {
    this.y *= -1;
  }
}
