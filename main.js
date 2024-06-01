import { svg, config, pendulums, timer } from "./config.js";
import Pendulum from "./lib/pendulum.js";

svg.style.width = window.innerWidth + "px";
svg.style.height = window.innerHeight + "px";

document.body.addEventListener("resize", () => {
  svg.width = window.innerWidth;
  svg.height = window.innerHeight;
});

document.getElementById("nav").onclick = () => {
  let params = "?";
  for (const key in config)
    params += key + "=" + JSON.stringify(config[key]) + "&";
  window.location.assign(window.location.origin + params);
};

const $ = (base, gap, i) => base * (1 + gap) ** i;

for (let i = 0; i < config.pendulums; i++) {
  pendulums.push(
    new Pendulum(
      i,
      config.speeds ? config.speeds[i] : $(config.speed, config.speedGap, i),
      config.heights
        ? config.heights[i]
        : $(config.height, config.heightGap, i),
      config.widths ? config.widths[i] : $(config.width, config.widthGap, i),
      config.angles ? config.angles[i] : $(config.angle, config.angleGap, i),
      config.colors
        ? config.colors[i]
        : `hsl(${$(config.color, config.colorGap, i)} 85 50)`
    )
  );
}

function loop(newTime) {
  timer.skip = newTime - timer.current;
  timer.current = newTime;
  // svg.innerHTML = "";
  pendulums.forEach((pendulum) => {
    pendulum.calculate();
    pendulum.render();
  });
  window.requestAnimationFrame(loop);
}
window.requestAnimationFrame(loop);
