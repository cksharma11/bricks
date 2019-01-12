const addPixelSuffix = value => value + 'px';

const drawPaddle = function(paddle, paddleDiv) {
  paddleDiv.style.width = addPixelSuffix(paddle.width);
  paddleDiv.style.height = addPixelSuffix(paddle.height);
  paddleDiv.style.bottom = addPixelSuffix(paddle.bottom);
  paddleDiv.style.left = addPixelSuffix(paddle.left);
};

const eventListner = function(paddle, paddleDiv) {
  if (event.key == 'ArrowRight' && paddle.left < 860) paddle.moveRight();
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

const createPaddle = function(paddle) {
  const screen = document.getElementById('screen');
  const paddleDiv = document.createElement('div');
  paddleDiv.className = 'paddle';
  paddleDiv.id = 'paddle_1';
  screen.appendChild(paddleDiv);
  drawPaddle(paddle, paddleDiv);
  const setEventListner = eventListner.bind(null, paddle, paddleDiv);
  screen.onkeydown = setEventListner;
  screen.focus();
  drawPaddle(paddle, paddleDiv);
};

const drawBall = function(ball, newBall) {
  newBall.style.height = addPixelSuffix(ball.height);
  newBall.style.width = addPixelSuffix(ball.width);
  newBall.style.borderRadius = addPixelSuffix(ball.height);
};

const createBall = function(ball) {
  const screen = document.getElementById('screen');
  const newBall = document.createElement('div');
  drawBall(ball, newBall);
  newBall.className = 'ball';
  newBall.id = 'ball_1';
  screen.appendChild(newBall);
};

const initialisePaddle = function() {
  const paddle = new Paddle(20, 100, 5, 430);
  const screen = new Screen(600, 960);
  const ball = new Ball(20);
  createScreen(screen);
  createPaddle(paddle);
  createBall(ball);
};

window.onload = initialisePaddle;
