import { pendulums, svg, timer, config } from "../config.js";

export default class Pendulum {
  constructor(id, speed, height, width, angle) {
    this.id = id;
    this.speed = speed;
    this.height = height;
    this.width = width;
    this.angle = angle;
    this.lastPos = undefined;
    this.color = `hsl(${Math.random() * 255} 85% 50%)`;

    svg.innerHTML += `<path stroke="${this.color}" stroke-width="${width}px" d="M 0 0 L 10 10" id="path-${id}" />`;

    this.calculate();
    this.render();
  }

  calculate() {
    this.path = document.getElementById("path-" + this.id);
    this.calcPos();
    this.angle += this.speed * timer.fps;
  }
  render() {
    const ex = this.x + Math.cos(this.angle) * this.height;
    const ey = this.y + Math.sin(this.angle) * this.height;

    this.path.setAttribute("stroke", this.color);
    this.path.setAttribute("stroke-width", this.width + "px");
    this.path.setAttribute("d", `M ${this.x} ${this.y} L ${ex} ${ey}`);

    if (this.id === pendulums.length - 1) {
      if (this.lastPos === undefined) {
        svg.innerHTML += `<path stroke="white" stroke-width="${
          config.lineWidth
        }px" d="M ${ex} ${ey} L ${ex + 1} ${ey + 1}" />`;
      } else {
        svg.innerHTML += `<path stroke="white" stroke-width="${config.lineWidth}px" d="M ${ex} ${ey} L ${this.lastPos[0]} ${this.lastPos[1]}" />`;
      }
      this.lastPos = [ex, ey];
    }
  }

  calcPos() {
    if (this.id === 0) {
      this.x = window.innerWidth / 2;
      this.y = window.innerHeight / 2;
    } else {
      const parent = pendulums[this.id - 1];
      this.x = parent.x + Math.cos(parent.angle) * parent.height;
      this.y = parent.y + Math.sin(parent.angle) * parent.height;
    }
  }
}
