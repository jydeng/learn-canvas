export default function(context) {
  canvas.width = "800";
  canvas.height = "800";
  context.lineWidth = 10;
  context.strokeStyle = "#005588";

  context.beginPath();
  context.moveTo(100, 200);
  context.lineTo(700, 200);
  context.lineCap = "butt";
  context.stroke();

  context.beginPath();
  context.moveTo(100, 400);
  context.lineTo(700, 400);
  context.lineCap = "round";
  context.stroke();

  context.beginPath();
  context.moveTo(100, 600);
  context.lineTo(700, 600);
  context.lineCap = "square";
  context.stroke();

  context.lineWidth = 1;
  context.beginPath();
  context.moveTo(100, 600);
  context.lineTo(100, 200);
  context.stroke();

  context.beginPath();
  context.moveTo(700, 600);
  context.lineTo(700, 200);
  context.stroke();
}
