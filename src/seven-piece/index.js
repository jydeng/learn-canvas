/**
 * 初级：绘制一个七巧板
 * @param {*} canvas 
 */
export default function(canvas) {
  let context = canvas.getContext("2d");
  canvas.width = "800";
  canvas.height = "800";

  let tangram = [
    {
      p: [{ x: 0, y: 0 }, { x: 800, y: 0 }, { x: 400, y: 400 }],
      color: "#caff67"
    },
    {
      p: [{ x: 0, y: 0 }, { x: 400, y: 400 }, { x: 0, y: 800 }],
      color: "#67bcef"
    },
    {
      p: [
        { x: 800, y: 0 },
        { x: 800, y: 400 },
        { x: 600, y: 600 },
        { x: 600, y: 200 }
      ],
      color: "#ef3d61"
    },
    {
      p: [{ x: 600, y: 200 }, { x: 600, y: 600 }, { x: 400, y: 400 }],
      color: "#f9f51a"
    },
    {
      p: [
        { x: 400, y: 400 },
        { x: 600, y: 600 },
        { x: 400, y: 800 },
        { x: 200, y: 600 }
      ],
      color: "#a594c0"
    },
    {
      p: [{ x: 200, y: 600 }, { x: 400, y: 800 }, { x: 0, y: 800 }],
      color: "#fa8ecc"
    },
    {
      p: [{ x: 800, y: 400 }, { x: 800, y: 800 }, { x: 400, y: 800 }],
      color: "#f6ca29"
    }
  ];

  function draw(piece, context) {
    let first = piece.p.shift();
    context.beginPath();

    context.moveTo(first.x, first.y);
    piece.p.forEach(p => {
      context.lineTo(p.x, p.y);
    });

    context.closePath();
    context.fillStyle = piece.color;
    context.fill();
    context.strokeStyle = "#010101";
    context.stroke();
  }

  tangram.forEach(item => {
    draw(item, context);
  });
}
