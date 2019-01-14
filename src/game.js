class Game {
  constructor(screen, paddle, ball) {
    this.screen = screen;
    this.paddle = paddle;
    this.ball = ball;
  }

  checkCollision() {
    let velocity = this.paddle.manageCollisionWith(this.ball);
    velocity = this.screen.collide(this.ball, velocity);
    return velocity;
  }

  updateState() {
    const velocity = this.checkCollision();
    this.ball.setVelocity(velocity);
    this.ball.move();
  }
}
