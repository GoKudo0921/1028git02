const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

const fruitImage = new Image();
fruitImage.src = '../../02omikuji/Top.png'; // フルーツ画像のパス

const fruitWidth = 50;
const fruitHeight = 50;

let fruitX = Math.random() * (canvas.width - fruitWidth);
let fruitY = Math.random() * (canvas.height - fruitHeight);

function drawFruit() {
      ctx.drawImage(fruitImage, fruitX, fruitY, fruitWidth, fruitHeight);
  }

  const scoreElement = document.getElementById('score');
let score = 0;

function gameLoop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawFruit();
    requestAnimationFrame(gameLoop);
}

canvas.addEventListener('click', (e) => {
    const mouseX = e.clientX - canvas.offsetLeft;
    const mouseY = e.clientY - canvas.offsetTop;

    if (mouseX >= fruitX && mouseX <= fruitX + fruitWidth && mouseY >= fruitY && mouseY <= fruitY + fruitHeight) {
        score++;
        scoreElement.textContent = score;
        fruitX = Math.random() * (canvas.width - fruitWidth);
        fruitY = Math.random() * (canvas.height - fruitHeight);
    }
});

gameLoop();