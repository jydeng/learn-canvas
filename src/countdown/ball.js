/**
 * 初级：绘制弧
 * @param {*} canvas 
 */
export default function(canvas) {
  canvas.width = 1024;
  canvas.height = 768;
  let context = canvas.getContext("2d");
  let ball = { x: 512, y: 100, r: 20, g: 2, vx: 4, vy: -10, color: "#005588" };

  function render() {
    context.clearRect(0, 0, context.canvas.width, context.canvas.height);
    context.fillStyle = ball.color;
    context.beginPath();
    context.arc(ball.x, ball.y, ball.r, 0, 2 * Math.PI);
    context.closePath();
    context.fill();
  }

  function update() {
    ball.x += ball.vx;
    ball.y += ball.vy;
    ball.vy += ball.g;

    if (ball.y >= 768 - ball.r) {
      ball.y = 768 - ball.r;
      ball.vy = -ball.vy * 0.75;
    }
  }
  setInterval(() => {
    render();
    update();
  }, 50);
}
