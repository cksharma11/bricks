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
    const isWithinX =
      differenceInPositionX >= 0 && differenceInPositionX <= 110;
    const isWithinY = differenceInPositionY >= 0 && differenceInPositionY <= 20;
    return isWithinX && isWithinY;
  }

  doesCollideWith(brick, ball) {
    const differenceInPositionX = ball.positionX - brick.X;
    const differenceInPositionY = brick.Y - ball.positionY;
    return this.checkCollision(differenceInPositionX, differenceInPositionY);
  }

  manageCollisionWith(ball, velocity) {
    const newVelocity = new Velocity(velocity.x, velocity.y);
    const doesCollide = this.brickStore.some(brick => {
      if (!this.doesCollideWith(brick, ball)) return false;
      document.getElementById(brick.ID).remove();
      delete this.brickStore[brick.ID];
      return true;
    });
    if (doesCollide) newVelocity.negateY();

    return newVelocity;
  }
}
