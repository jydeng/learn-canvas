export default function(zr, zrender) {
  let w = zr.getWidth();
  let h = zr.getHeight();

  let spray = function(x, y) {
    let cnt = 200;
    let centerTolerance = 0;
    let radius = 10;
    let particles = [];
    let duration = 3000;
    let color = Math.random() * 260;
    let maxVx = 1000 + Math.random() * 1500;
    let maxVy = 1000 + Math.random() * 1500;

    for (let i = 0; i < cnt; ++i) {
      let x0 = x + centerTolerance * (Math.random() - 1);
      let y0 = y + centerTolerance * (Math.random() - 1);
      let opacity = Math.random() * 0.5 + 0.5;

      let particle = new zrender.Circle({
        shape: {
          cx: 0,
          cy: 0,
          r: radius * (0.5 + 0.5 * Math.random())
        },
        style: {
          fill:
            "hsl(" +
            Math.floor(color + Math.random() * 100) +
            ", 80%, " +
            Math.floor(Math.random() * 40 + 40) +
            "%)",
          opacity: opacity
        },
        position: [x0, y0]
      });

      zr.add(particle);
      particles.push(particle);

      particle._t = 0;
      particle._opacity = opacity;

      let animator = particle.animate("");
      let vx = (Math.random() - 0.5) * maxVx;
      let vy = (Math.random() - 1.2) * maxVy;
      let ay = 8000;
      let t0 = 0;

      animator
        .when(duration, {
          _t: 1
        })
        .during(function(p, _t) {
          debugger;
          let dt = _t - t0;
          let x1 = p.position[0] + vx * dt;
          let y1 = p.position[1] + vy * dt;

          p.position = [x1, y1];
          p.setStyle({
            opacity: p._opacity * (1 - _t)
          });

          vy = vy + ay * dt;
          t0 = _t;
        })
        .done(function() {
          zr.remove(particle);
        })
        .start();
    }
  };

  spray(w / 2, h / 2);
  setInterval(function() {
    spray(w * Math.random(), h * Math.random());
  }, 2000);
}
