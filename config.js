const params = window.location.search.substring(1).split("&");

const isRandom = params.includes("random");

const rand = (max, min = 0, precision = 3) =>
  Number((min + Math.random() * (max - min)).toFixed(precision));
const pickOne = (...args) => args[Math.floor(Math.random() * args.length)];
const $ = (val1, val2) => (isRandom ? val2 : val1);

const config = {
  pendulums: $(3, rand(5, 2, 0)),

  speeds: $(undefined, pickOne(undefined, null)),
  speed: $(Math.PI, Math.PI * pickOne(rand(-1, -5, 0), rand(5, 1, 0))),
  speedGap: $(1, pickOne(rand(-1, -5, 0), rand(5, 1, 0))),

  heights: $(undefined, pickOne(undefined, null)),
  height: $(100, rand(100, 50)),
  heightGap: $(-0.5, rand(0, -0.75)),

  widths: undefined,
  width: $(5, rand(10, 5)),
  widthGap: $(-0.1, rand(0, -0.25)),

  angles: $(undefined, pickOne(undefined, null)),
  angle: $(Math.PI / 2, rand(Math.PI * 2, -Math.PI * 2)),
  angleGap: $(Math.PI, rand(1, -1)),

  saturation: $(85, rand(100)),
  lightness: $(50, rand(100)),

  colors: $(undefined, pickOne(undefined, null)),
  color: $(360, rand(360)),
  colorGap: $(0.5, rand(1, 0)),

  lineWidth: $(2, rand(5, 1)),
  lineColor: $("#fff", `hsl(${rand(360)} 85 85)`),
  lineFill: $("#222", `hsl(${rand(360)} 50 10)`),
};

params.forEach((param) => {
  const [key, value] = param.split("=");
  if (value === "undefined") config[key] = undefined;
  else
    try {
      config[key] = JSON.parse(value);
    } catch {
      if (typeof value === "string")
        config[key] = value.replaceAll("%20", " ").replaceAll("%22", "");
      else config[key] = value;
    }
});

["speeds", "heights", "angles", "colors"].forEach((key) => {
  if (params.includes("random") && config[key] === null) {
    config[key] = [];
    for (let i = 0; i < config.pendulums; i++) {
      const val = {
        speeds: rand(Math.PI * 5, -Math.PI * 5, 0),
        heights: rand(100, 50),
        angles: rand(Math.PI * 1, -Math.PI * 1),
        colors: `hsl(${rand(360)} 85 50)`,
      }[key];
      config[key].push(val);
    }
  }
});

console.log(config);

const timer = {
  current: 0,
  skip: 0,
  get fps() {
    return timer.skip / 1000;
  },
};

const svg = document.getElementById("svg");
const pendulums = [];

export { config, timer, svg, pendulums };
