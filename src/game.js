const addPixelSuffix = value => value + 'px';

const drawPaddle = function(paddle, paddleDiv) {
  paddleDiv.style.width = addPixelSuffix(paddle.width);
  paddleDiv.style.height = addPixelSuffix(paddle.height);
  paddleDiv.style.bottom = addPixelSuffix(paddle.bottom);
  paddleDiv.style.left = addPixelSuffix(paddle.left);
};

const eventListner = function(paddle, paddleDiv) {
  if (event.key == 'ArrowRight' && paddle.left < 760) paddle.moveRight();
  if (event.key == 'ArrowLeft' && paddle.left > 0) paddle.moveLeft();
  drawPaddle(paddle, paddleDiv);
};

const drawScreen = function(screen, mainScreen) {
  mainScreen.style.height = addPixelSuffix(screen.height);
  mainScreen.style.width = addPixelSuffix(screen.width);
};

const createScreen = function(screen) {
  const body = document.getElementById('body');
  const mainScreen = document.createElement('main');
  mainScreen.id = 'screen';
  mainScreen.tabIndex = '0';
  drawScreen(screen, mainScreen);
  body.appendChild(mainScreen);
};

const createPaddle = function(paddle, ball, velocity) {
  const screen = document.getElementById('screen');
  const paddleDiv = document.createElement('div');
  paddleDiv.className = 'paddle';
  paddleDiv.id = 'paddle_1';
  screen.appendChild(paddleDiv);
  const setEventListner = eventListner.bind(null, paddle, paddleDiv);
  screen.onkeydown = setEventListner;
  screen.focus();
  drawPaddle(paddle, paddleDiv);
  manageCollisionWithPaddle(paddle, ball, velocity);
};

const manageCollisionWithPaddle = function(paddle, ball, velocity) {
  setInterval(() => {
    if (paddle.doesCollideWithBall(ball)) {
      velocity.moveVertical();
    }
  }, 5);
};

const drawBall = function(ball, ballDiv) {
  ballDiv.style.height = addPixelSuffix(ball.height);
  ballDiv.style.width = addPixelSuffix(ball.width);
  ballDiv.style.borderRadius = addPixelSuffix(ball.height);
  ballDiv.style.left = addPixelSuffix(ball.x);
  ballDiv.style.bottom = addPixelSuffix(ball.y);
};

const createBall = function(ball, velocity) {
  const screen = document.getElementById('screen');
  const ballDiv = document.createElement('div');
  drawBall(ball, ballDiv);
  ballDiv.className = 'ball';
  ballDiv.id = 'ball_1';
  screen.appendChild(ballDiv);
  moveBall(ball, ballDiv, velocity);
};

const moveBall = function(ball, ballDiv, velocity) {
  setInterval(() => {
    if (ball.doesTopCollide()) velocity.moveVertical();
    if (ball.doesBottomCollide()) alert('Touched Bottom');

    if (ball.doesRightCollide()) velocity.moveHorizontal();
    if (ball.doesLeftCollide()) velocity.moveHorizontal();

    ball.move(velocity.x, velocity.y);
    drawBall(ball, ballDiv);
  }, 5);
};

const initialiseGame = function() {
  const paddle = new Paddle(25, 200, 5, 430);
  const screen = new Screen(600, 960);
  const ball = new Ball(40, 430, 25);
  const velocity = new Velocity(2, 2);
  createScreen(screen);
  createPaddle(paddle, ball, velocity);
  createBall(ball, velocity);
};

window.onload = initialiseGame;
