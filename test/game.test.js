describe('Paddle', () => {
  const expect = chai.expect;
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
});
