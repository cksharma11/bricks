const expect = chai.expect;

describe('Paddle', () => {
  it('should subtract 10 from left position of paddle', () => {
    const paddle = new Paddle(20, 100, 5, 430);
    paddle.moveLeft();
    expect(paddle)
      .to.have.property('left')
      .equals(420);
  });

  it('should add 10 to left position of paddle', () => {
    const paddle = new Paddle(20, 100, 5, 430);
    paddle.moveRight();
    expect(paddle)
      .to.have.property('left')
      .equals(440);
  });

  it('should return true when difference between ball.x and paddle.x is between 200 and ball height is less then 25', () => {
    const paddle = new Paddle(10, 100, 100, 100);
    const ball = new Ball(10, 200, 10);
    expect(paddle.doesCollideWith(ball)).to.equals(true);
  });

  it('should return false when difference between ball.x and paddle.x is not between 200 and ball height is less then 25', () => {
    const paddle = new Paddle(10, 100, 100, 100);
    const ball = new Ball(10, 100, 10);
    expect(paddle.doesCollideWith(ball)).to.equals(false);
  });
});

describe('Ball', () => {
  const ball = new Ball(40, 10, 10);
  it('should increase the velocity of ball', () => {
    const velocity = { x: 10, y: 10 };
    ball.move(velocity);
    expect(ball)
      .to.have.property('x')
      .equals(20);
    expect(ball)
      .to.have.property('y')
      .equals(20);
  });

  it('should return false when x is less then 920', () => {
    expect(ball.doesRightCollide()).to.equals(false);
  });

  it('should return true when x is equals to 920', () => {
    const ball = new Ball(40, 920, 10);
    expect(ball.doesRightCollide()).to.equals(true);
  });
});

describe('Velocity', () => {
  it('should make velocity.x nagetive', () => {
    const velocity = new Velocity(10, 10);
    velocity.moveHorizontal();
    expect(velocity.x).to.equals(-10);
  });
  it('should make velocity.y nagetive', () => {
    const velocity = new Velocity(10, 10);
    velocity.moveVertical();
    expect(velocity.y).to.equals(-10);
  });
  it('should make velocity.x nagetive to positive value', () => {
    const velocity = new Velocity(-10, -10);
    velocity.moveHorizontal();
    expect(velocity.x).to.equals(10);
  });
  it('should make velocity.y nagetive to positive value', () => {
    const velocity = new Velocity(-10, -10);
    velocity.moveVertical();
    expect(velocity.y).to.equals(10);
  });
});
