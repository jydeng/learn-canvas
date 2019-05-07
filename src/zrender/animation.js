export default function(zr, zrender) {
  let w = zr.getWidth();
  let h = zr.getHeight();

  let r = 30;
  let circle = new zrender.Circle({
    shape: {
      cx: r,
      cy: h / 2,
      r: r
    },
    style: {
      fill: "transparent",
      stroke: "#FF6EBE"
    },
    silent: true
  });

  circle
    .animate("shape", true)
    .when(5000, {
      cx: w - r
    })
    .when(10000, {
      cx: r
    })
    .start();

  zr.add(circle);
}
