let board 
let boardWidth = 800;
let boardHeight = 600;
let context;

let fishWidth = 60;
let fishHeight = 60;
let fishX = boardWidth/8;
let fishY = boardHeight/2;

let fish = {
  x: fishX,
  y: fishY,
  width: fishWidth,
  height: fishHeight
}

let pipeArray = [];
let pipeWidth = 100;
let pipeHeight = 280;
let pipeX = boardWidth;
let pipeY = 0;

let topPipeImg;
let bottomPipeImg;

let velocityX = -2; // speed of pipes moving left
let velocityY = 0; // speed of fish jump
let gravity = 0.7;

let gameOver = false; 
let score = 0;

window.onload = function() {
  board = document.getElementById("board");
  board.height = boardHeight;
  board.width = boardWidth;
  context = board.getContext("2d");

  fishImage = new Image();
  fishImage.src = "./assets/fish.png"
  fishImage.onload = function() {
    context.drawImage(fishImage, fish.x, fish.y, fish.width, fish.height);
  }

  topPipeImg = new Image();
  topPipeImg.src = "./assets/toppipe.png";

  bottomPipeImg = new Image();
  bottomPipeImg.src = "./assets/bottompipe.png";

  requestAnimationFrame(update);
  setInterval(placePipes, 1500);
  document.addEventListener("keydown", moveFish);
}

function update() {
  requestAnimationFrame(update);
  if (gameOver) {
    return;
  }

  context.clearRect(0, 0, board.width, board.height);

  velocityY += gravity;
  // fish.y += velocityY;
  fish.y = Math.max(fish.y + velocityY, 0);
  context.drawImage(fishImage, fish.x, fish.y, fish.width, fish.height);

  if (fish.y > board.height) {
    gameOver = true;
  }

  for (let i = 0; i < pipeArray.length; i++) {
    let pipe = pipeArray[i];
    pipe.x += velocityX;
    context.drawImage(pipe.img, pipe.x, pipe.y, pipe.width, pipe.height);
    if (!pipe.passed && fish.x > pipe.x + pipe.width) {
      score += 0.5; 
      pipe.passed = true;
    }

    if (detectCollision(fish, pipe)) {
      gameOver = true;
    }
  }

  while (pipeArray.length > 0 && pipeArray[0].x < -pipeWidth) {
    pipeArray.shift();
  }

  if (gameOver) {
    context.fillText("GAME OVER", 5, 90);
  }

  context.fillStyle = "white";
  context.font="45px sans-serif";
  context.fillText(score, 5, 45);
}

function placePipes() {
  if (gameOver) {
    return;
  }

  let randomPipeY = pipeY - Math.random()*(pipeHeight/2);
  let openingSpace = board.height / 3;

  let topPipe = {
    img: topPipeImg, 
    x: pipeX, 
    y: randomPipeY, 
    width: pipeWidth, 
    height: pipeHeight,
    passed: false
  }

  pipeArray.push(topPipe);

  let bottomPipe = {
    img: bottomPipeImg, 
    x: pipeX, 
    y: randomPipeY + pipeHeight + openingSpace, 
    width: pipeWidth, 
    height: pipeHeight,
    passed: false
  }

  pipeArray.push(bottomPipe);
}

function moveFish(e) {
  if (e.code == "Space" || e.code == "ArrowUp") {
    velocityY = -10;

    if (gameOver) {
      fishy.y = fishY;
      pipeArray = [];
      score = 0;
      gameOver = false;
    }
  }
}

function detectCollision(a, b) {
  return a.x < b.x + b.width &&
        a.x + a.width > b.x &&
        a.y < b.y + b.height && 
        a.y + a.height > b.y;
}

