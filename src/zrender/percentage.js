export default function(zr, zrender) {
  document.getElementById("main").style.background = "rgb(0, 0, 0)";
  let w = zr.getWidth();
  let h = zr.getHeight();
  let r = 100;
  let x = w / 2;
  let y = h / 2;
  let percentage = 0;
  let rad = (Math.PI * 2) / 100;

  let circle = new zrender.Circle({
    shape: {
      cx: x,
      cy: y,
      r: r
    },
    style: {
      lineWidth: 1,
      stroke: "#FFF"
    }
  });

  zr.add(circle);

  let arc = new zrender.Arc({
    shape: {
      cx: x,
      cy: y,
      r: r,
      startAngle: -Math.PI / 2,
      endAngle: -Math.PI / 2 + percentage * rad
    },
    style: {
      lineWidth: 5,
      stroke: "#FFF"
    },
    clockwise: false
  });

  zr.add(arc);

  let t = new zrender.Text({
    style: {
      text: percentage + "%",
      textAlign: "center",
      textVerticalAlign: "middle",
      fontSize: 30,
      fontFamily: "Lato",
      fontWeight: "bolder",
      textFill: "#fff",
      blend: "lighten"
    },
    position: [w / 2, h / 2]
  });
  zr.add(t);

  setInterval(function() {
    if (percentage >= 100) {
      percentage = 0;
    } else {
      percentage++;
    }

    t.attr("style", {
      text: percentage + "%"
    });

    arc.attr("shape", {
      endAngle: -Math.PI / 2 + percentage * rad
    });
  }, 200);
}
