import { svg, config, pendulums, timer } from "./config.js";
import Pendulum from "./lib/pendulum.js";

svg.style.width = window.innerWidth + "px";
svg.style.height = window.innerHeight + "px";

document.body.addEventListener("resize", () => {
  svg.width = window.innerWidth;
  svg.height = window.innerHeight;
});

for (let i = 0; i < config.pendulums; i++) {
  pendulums.push(
    new Pendulum(
      i,
      config.speeds ? config.speeds[i] : config.speed + config.speedGap * i,
      config.height + config.heightGap * i,
      config.width + config.widthGap * i,
      config.angle + config.angleGap * i
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
