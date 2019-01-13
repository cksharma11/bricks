const addPixelSuffix = value => value + 'px';
const getMainScreen = document => document.getElementById('screen');

const eventListner = function(paddle) {
  if (event.key == 'ArrowRight' && paddle.left < 760) paddle.moveRight();
  if (event.key == 'ArrowLeft' && paddle.left > 0) paddle.moveLeft();
  drawPaddle(paddle);
};

const drawScreen = function(screen) {
  const mainScreen = document.getElementById('screen');
  mainScreen.style.height = addPixelSuffix(screen.height);
  mainScreen.style.width = addPixelSuffix(screen.width);
};

const createScreen = function(screen) {
  const body = document.getElementById('body');
  const mainScreen = document.createElement('main');
  mainScreen.id = 'screen';
  mainScreen.tabIndex = '0';
  body.appendChild(mainScreen);
};

const drawPaddle = function(paddle) {
  const paddleDiv = document.getElementById('paddle_1');
  paddleDiv.style.width = addPixelSuffix(paddle.width);
  paddleDiv.style.height = addPixelSuffix(paddle.height);
  paddleDiv.style.bottom = addPixelSuffix(paddle.bottom);
  paddleDiv.style.left = addPixelSuffix(paddle.left);
};

const createPaddle = function(paddle) {
  const screen = getMainScreen(document);
  const paddleDiv = document.createElement('div');
  paddleDiv.className = 'paddle';
  paddleDiv.id = 'paddle_1';
  screen.appendChild(paddleDiv);
  const setEventListner = eventListner.bind(null, paddle, paddleDiv);
  screen.onkeydown = setEventListner;
  screen.focus();
};

const drawBall = function(ball) {
  const ballDiv = document.getElementById('ball_1');
  ballDiv.style.height = addPixelSuffix(ball.height);
  ballDiv.style.width = addPixelSuffix(ball.width);
  ballDiv.style.borderRadius = addPixelSuffix(ball.height);
  ballDiv.style.left = addPixelSuffix(ball.x);
  ballDiv.style.bottom = addPixelSuffix(ball.y);
};

const createBall = function(ball) {
  const screen = getMainScreen(document);
  const ballDiv = document.createElement('div');
  ballDiv.className = 'ball';
  ballDiv.id = 'ball_1';
  screen.appendChild(ballDiv);
};

const moveBall = function(ball, velocity) {
  if (ball.doesTopCollide()) velocity.moveVertical();
  if (ball.doesBottomCollide()) alert('GAME OVER');
  if (ball.doesRightCollide()) velocity.moveHorizontal();
  if (ball.doesLeftCollide()) velocity.moveHorizontal();

  ball.move(velocity);
  drawBall(ball);
};

const manageCollisionWithPaddle = function(paddle, ball, velocity) {
  if (paddle.doesCollideWithBall(ball)) velocity.moveVertical();
};

const initialiseGame = function() {
  const paddle = new Paddle(25, 200, 5, 430);
  const screen = new Screen(600, 960);
  const ball = new Ball(40, 430, 25);
  const velocity = new Velocity(2, 2);
  createScreen(screen);
  createPaddle(paddle);
  createBall(ball);
  drawScreen(screen);
  drawPaddle(paddle);
  drawBall(ball);
  setInterval(() => moveBall(ball, velocity), 5);
  setInterval(() => manageCollisionWithPaddle(paddle, ball, velocity), 5);
};

window.onload = initialiseGame;
