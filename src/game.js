class Paddle {
  constructor(height, width, bottom, left) {
    this.height = height;
    this.width = width;
    this.bottom = bottom;
    this.left = left;
  }

  moveLeft() {
    this.left -= 10;
  }

  moveRight() {
    this.left += 10;
  }
}

const addPixelSuffix = value => value + 'px';

const drawPaddle = function(paddle, paddleDiv) {
  paddleDiv.style.width = addPixelSuffix(paddle.width);
  paddleDiv.style.height = addPixelSuffix(paddle.height);
  paddleDiv.style.bottom = addPixelSuffix(paddle.bottom);
  paddleDiv.style.left = addPixelSuffix(paddle.left);
};

const eventListner = function(paddle, paddleDiv) {
  console.log(paddle.left > 800);
  if (event.key == 'ArrowRight' && paddle.left < 860) paddle.moveRight();
  if (event.key == 'ArrowLeft' && paddle.left > 0) paddle.moveLeft();
  drawPaddle(paddle, paddleDiv);
};

const createScreen = function(document) {
  const body = document.getElementById('body');
  const screen = document.createElement('main');
  screen.id = 'screen';
  screen.tabIndex = '0';
  body.appendChild(screen);
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

const initialisePaddle = function() {
  const paddle = new Paddle(20, 100, 5, 430);
  createScreen(document);
  createPaddle(paddle);
};

window.onload = initialisePaddle;
