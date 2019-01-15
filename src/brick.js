class Brick {
  constructor(height, width, positionX, positionY) {
    this.height = height;
    this.width = width;
    this.positionX = positionX;
    this.positionY = positionY;
    this.brickStore = [];
  }

  storeBricks(brick) {
    this.brickStore.push(brick);
  }

  checkCollision(differenceInPositionX, differenceInPositionY) {
    const isWithinX = differenceInPositionX > 0 && differenceInPositionX < 100;
    const isWithinY = differenceInPositionY > 0 && differenceInPositionY < 20;
    return isWithinX && isWithinY;
  }

  doesCollideWith(brick, ball) {
    const differenceInPositionX = ball.positionX - brick.x;
    const differenceInPositionY = ball.positionY - brick.y;
    return this.checkCollision(differenceInPositionX, differenceInPositionY);
  }

  manageCollisionWith(ball) {
    const velocity = new Velocity(ball.getVelocityX(), ball.getVelocityY());
    const doesCollide = this.brickStore.filter(brick => {
      return this.doesCollideWith(brick, ball);
    });
    if (doesCollide) velocity.negateY();

    return velocity;
  }
}
