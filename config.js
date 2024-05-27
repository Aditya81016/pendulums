const params = window.location.search.substring(1).split("&");

const config = {
  pendulums: 3,
  speeds: undefined,
  speed: Math.PI,
  speedGap: 2,
  height: 100,
  heightGap: -100 / 4,
  width: 4,
  widthGap: 0,
  angle: Math.PI / 2,
  angleGap: 0,
  lineWidth: 2,
};

const timer = {
  current: 0,
  skip: 0,
  get fps() {
    return timer.skip / 1000;
  },
};

params.forEach((param) => {
  const [key, value] = param.split("=");
  config[key] = value ? JSON.parse(value) : value;
});

const svg = document.getElementById("svg");
const pendulums = [];

export { config, timer, svg, pendulums };
