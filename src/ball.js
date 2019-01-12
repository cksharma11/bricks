class Ball {
  constructor(radius, x, y) {
    this.height = radius;
    this.width = radius;
    this.x = x;
    this.y = y;
  }
  move(x, y) {
    this.x += x;
    this.y += y;
  }

  doesRightCollide() {
    return this.x == 920;
  }
  doesTopCollide() {
    return this.y == 559;
  }
  doesBottomCollide() {
    return this.y == 1;
  }
  doesLeftCollide() {
    return this.x == 0;
  }
}
