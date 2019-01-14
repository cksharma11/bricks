const ARROW_RIGHT = 'ArrowRight';
const ARROW_LEFT = 'ArrowLeft';
const addPixelSuffix = value => value + 'px';
const getMainScreen = document => document.getElementById('screen');

const eventListner = function(paddle) {
  if (event.key == ARROW_RIGHT) paddle.moveRight();
  if (event.key == ARROW_LEFT) paddle.moveLeft();
  drawPaddle(paddle);
};

const drawScreen = function(screen) {
  const mainScreen = document.getElementById('screen');
  mainScreen.style.height = addPixelSuffix(screen.height);
  mainScreen.style.width = addPixelSuffix(screen.width);
};

const createScreen = function() {
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

const createPaddle = function() {
  const screen = getMainScreen(document);
  const paddleDiv = document.createElement('div');
  paddleDiv.className = 'paddle';
  paddleDiv.id = 'paddle_1';
  screen.appendChild(paddleDiv);
};

const drawBall = function(ball) {
  const ballDiv = document.getElementById('ball_1');
  ballDiv.style.height = addPixelSuffix(ball.height);
  ballDiv.style.width = addPixelSuffix(ball.width);
  ballDiv.style.borderRadius = addPixelSuffix(ball.height);
  ballDiv.style.left = addPixelSuffix(ball.getPositionX());
  ballDiv.style.bottom = addPixelSuffix(ball.getPositionY());
};

const createBall = function() {
  const screen = getMainScreen(document);
  const ballDiv = document.createElement('div');
  ballDiv.className = 'ball';
  ballDiv.id = 'ball_1';
  screen.appendChild(ballDiv);
};

const moveBall = function(game) {
  game.updateState();
  drawBall(game.ball);
};

const createGame = function(game) {
  createScreen();
  createPaddle();
  createBall();
  drawScreen(game.screen);
  drawPaddle(game.paddle);
  drawBall(game.ball);
};

const startGame = function(game) {
  const mainDiv = getMainScreen(document);
  mainDiv.onkeydown = eventListner.bind(null, game.paddle);
  mainDiv.focus();
  setInterval(moveBall.bind(null, game), 5);
};

const initialiseGame = function() {
  const paddle = new Paddle(25, 200, 5, 430);
  const screen = new Screen(600, 960);
  const velocity = new Velocity(2, 2);
  const ball = new Ball(40, 430, 25, velocity);
  const game = new Game(screen, paddle, ball);
  createGame(game);
  startGame(game);
};

window.onload = initialiseGame;
