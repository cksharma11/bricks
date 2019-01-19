const ARROW_RIGHT = 'ArrowRight';
const ARROW_LEFT = 'ArrowLeft';
const TOTAL_BRIKCS = 40;
const NUMBER_OF_BRICKS_IN_ROW = 8;
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

const appendBricks = function(positionX, positionY, id) {
  const screen = getMainScreen(document);
  const brick = document.createElement('div');
  brick.className = 'brick';
  brick.id = id;
  brick.positionX = positionX;
  brick.positionY = positionY;
  screen.appendChild(brick);
};

const setBricksPosition = function(bricks, positionX, positionY) {
  for (const ID in bricks) {
    if (ID % NUMBER_OF_BRICKS_IN_ROW == 0) {
      positionX = 0;
      positionY = positionY - 25;
    }
    appendBricks(positionX, positionY, ID);
    positionX = positionX + 120;
  }
};

const createBrick = function() {
  const bricks = new Array(TOTAL_BRIKCS).fill(undefined);
  setBricksPosition(bricks, 30, 600);
};

const drawBrick = function(brick) {
  const bricks = new Array(TOTAL_BRIKCS).fill(undefined);
  for (const ID in bricks) {
    const brickDiv = document.getElementById(ID);
    brickDiv.style.width = addPixelSuffix(brick.width);
    brickDiv.style.height = addPixelSuffix(brick.height);
    brickDiv.style.left = addPixelSuffix(brickDiv.positionX);
    brickDiv.style.bottom = addPixelSuffix(brickDiv.positionY);
    brick.storeBricks({ ID, X: brickDiv.positionX, Y: brickDiv.positionY });
  }
};

const displayScore = function(score) {
  const scoreCard = document.getElementById('score');
  scoreCard.innerText = score;
};

const displayRemainingLifes = function(lifes) {
  const lifesCount = document.getElementById('lives');
  lifesCount.innerText = lifes;
};

const moveBall = function(game) {
  game.updateState();
  drawBall(game.ball);
  displayScore(game.score());
  displayRemainingLifes(game.lifesCount());
};

const createGame = function(game) {
  createScreen();
  createPaddle();
  createBall();
  createBrick();
  drawScreen(game.screen);
  drawPaddle(game.paddle);
  drawBall(game.ball);
  drawBrick(game.brick);
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
  const brick = new Brick(20, 110, 0, 0);
  const game = new Game(screen, paddle, ball, brick);
  createGame(game);
  startGame(game);
};

window.onload = initialiseGame;
