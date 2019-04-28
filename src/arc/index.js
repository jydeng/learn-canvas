/**
 * 初级：绘制弧
 * @param {*} canvas
 */
export default function(canvas) {
  let context = canvas.getContext("2d");
  canvas.width = "1024";
  canvas.height = "768";

  context.lineWidth = 5;
  context.strokeStyle = "#005588";
  // x,y,半径,开始弧度，结束弧度，顺时针（默认）
  // 弧度坐标固定
  //    1.5
  // 1       0/2
  //    0.5
  context.arc(300, 300, 200, 0, 0.5 * Math.PI, true);
  context.stroke();
}
