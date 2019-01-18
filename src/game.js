class Game {
  constructor(screen, paddle, ball, brick) {
    this.screen = screen;
    this.paddle = paddle;
    this.ball = ball;
    this.brick = brick;
  }

  checkCollision() {
    let velocity = this.paddle.manageCollisionWith(this.ball);
    velocity = this.brick.manageCollisionWith(this.ball);
    velocity = this.screen.collide(this.ball, velocity);
    return velocity;
  }

  updateState() {
    const velocity = this.checkCollision();
    this.ball.setVelocity(velocity);
    this.ball.move();
  }
}
