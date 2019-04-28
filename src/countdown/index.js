/**
 * 初级：绘制时间
 */
import dight from "./digit.json";
const WIDTH = document.body.clientWidth;
const HEIGHT = document.body.clientHeight;
const RADIUS = Math.round((WIDTH * 4) / 5 / 108) - 1;
const MARGIN_LEFT = Math.round(WIDTH / 10);
const MARGIN_TOP = Math.round(HEIGHT / 5);

const endTime = new Date(2019, 3, 29, 14, 30, 30);
const balls = [];
const colors = [
  "#33B5E5",
  "#0099CC",
  "#AA66CC",
  "#9933CC",
  "#99CC00",
  "#669900",
  "#FFBB33",
  "#FF4444",
  "#CCC0000"
];

function remainingSecond() {
  let curTime = new Date();
  // let ret = endTime.getTime() - curTime.getTime();

  // ret = Math.round(ret / 1000);

  // return ret >= 0 ? ret : 0;
  return (
    curTime.getHours() * 3600 + curTime.getMinutes() * 60 + curTime.getSeconds()
  );
}

export default function(canvas) {
  canvas.width = WIDTH;
  canvas.height = HEIGHT;
  let context = canvas.getContext("2d");
  let ret = remainingSecond();

  function updateBalls() {
    for (let i = 0; i < balls.length; i++) {
      let ball = balls[i];
      ball.x += ball.vx;
      ball.y += ball.vy;
      ball.vy += ball.g;

      if (ball.y >= HEIGHT - RADIUS) {
        ball.y = HEIGHT - RADIUS;
        ball.vy = -ball.vy * 0.75;
      }
    }

    let cnt = 0;
    for (let i = 0; i < balls.length; i++) {
      const ball = balls[i];
      if (ball.x + RADIUS > 0 && ball.x - RADIUS < WIDTH) {
        balls[cnt++] = ball;
      }
    }

    while (balls.length > Math.min(cnt, 300)) {
      balls.pop();
    }
  }

  function addBalls(x, y, num) {
    for (let i = 0; i < dight[num].length; i++) {
      for (let j = 0; j < dight[num][i].length; j++) {
        if (dight[num][i][j] === 1) {
          var ball = {
            x: x + j * 2 * (RADIUS + 1) + (RADIUS + 1),
            y: y + i * 2 * (RADIUS + 1) + (RADIUS + 1),
            g: 1.5 + Math.random(),
            vx: Math.pow(-1, Math.ceil(Math.random() * 1000)) * 4,
            vy: -5,
            color: colors[Math.floor(Math.random() * colors.length)]
          };

          balls.push(ball);
        }
      }
    }
  }

  function update() {
    let next = remainingSecond();
    let nextHour = parseInt(next / 3600);
    let nextMinute = parseInt((next - nextHour * 3600) / 60);
    let nextSecond = next % 60;

    let curHour = parseInt(ret / 3600);
    let curMinute = parseInt((ret - curHour * 3600) / 60);
    let curSecond = ret % 60;

    if (next !== ret) {
      if (parseInt(curHour / 10) !== parseInt(nextHour / 10)) {
        addBalls(MARGIN_LEFT, MARGIN_TOP, parseInt(curHour / 10));
      }

      if (parseInt(curHour % 10) !== parseInt(nextHour % 10)) {
        addBalls(
          MARGIN_LEFT + 15 * (RADIUS + 1),
          MARGIN_TOP,
          parseInt(curHour % 10)
        );
      }

      if (parseInt(curMinute / 10) !== parseInt(nextMinute / 10)) {
        addBalls(
          MARGIN_LEFT + 39 * (RADIUS + 1),
          MARGIN_TOP,
          parseInt(curMinute / 10)
        );
      }

      if (parseInt(curMinute % 10) !== parseInt(nextMinute % 10)) {
        addBalls(
          MARGIN_LEFT + 54 * (RADIUS + 1),
          MARGIN_TOP,
          parseInt(curMinute % 10)
        );
      }

      if (parseInt(curSecond / 10) !== parseInt(nextSecond / 10)) {
        addBalls(
          MARGIN_LEFT + 78 * (RADIUS + 1),
          MARGIN_TOP,
          parseInt(curSecond / 10)
        );
      }

      if (parseInt(curSecond % 10) !== parseInt(nextSecond % 10)) {
        addBalls(
          MARGIN_LEFT + 93 * (RADIUS + 1),
          MARGIN_TOP,
          parseInt(curSecond % 10)
        );
      }

      ret = next;
    }

    updateBalls();
  }

  function render() {
    let hour = parseInt(ret / 3600);
    let minute = parseInt((ret - hour * 3600) / 60);
    let second = ret % 60;

    context.clearRect(0, 0, WIDTH, HEIGHT);
    renderDigit(MARGIN_LEFT, MARGIN_TOP, parseInt(hour / 10), context);
    renderDigit(
      MARGIN_LEFT + 15 * (RADIUS + 1),
      MARGIN_TOP,
      parseInt(hour % 10),
      context
    );
    renderDigit(MARGIN_LEFT + 30 * (RADIUS + 1), MARGIN_TOP, 10, context);

    renderDigit(
      MARGIN_LEFT + 39 * (RADIUS + 1),
      MARGIN_TOP,
      parseInt(minute / 10),
      context
    );
    renderDigit(
      MARGIN_LEFT + 54 * (RADIUS + 1),
      MARGIN_TOP,
      parseInt(minute % 10),
      context
    );
    renderDigit(MARGIN_LEFT + 69 * (RADIUS + 1), MARGIN_TOP, 10, context);

    renderDigit(
      MARGIN_LEFT + 78 * (RADIUS + 1),
      MARGIN_TOP,
      parseInt(second / 10),
      context
    );
    renderDigit(
      MARGIN_LEFT + 93 * (RADIUS + 1),
      MARGIN_TOP,
      parseInt(second % 10),
      context
    );

    for (let i = 0; i < balls.length; i++) {
      const ball = balls[i];
      renderBall(ball, context);
    }
  }

  function renderBall(ball, context) {
    context.fillStyle = ball.color;
    context.beginPath();
    context.arc(ball.x, ball.y, RADIUS, 0, 2 * Math.PI);
    context.fill();
    context.closePath();
  }

  function renderDigit(x, y, num, context) {
    context.fillStyle = "rgb(0,102,153)";
    for (let i = 0; i < dight[num].length; i++) {
      for (let j = 0; j < dight[num][i].length; j++) {
        if (dight[num][i][j] === 1) {
          context.beginPath();
          context.arc(
            x + j * 2 * (RADIUS + 1) + (RADIUS + 1),
            y + i * 2 * (RADIUS + 1) + (RADIUS + 1),
            RADIUS,
            0,
            2 * Math.PI
          );
          context.fill();
          context.closePath();
        }
      }
    }
  }

  function animate() {
    render();
    update();
    window.requestAnimationFrame(animate);
  }
  animate();
}
