import "../styles/index.scss";

import p5 from "p5";

const CANVAS_WIDTH = 720;
const CANVAS_HEIGHT = 400;

const sketch = (s: p5) => {
  s.setup = () => {
    s.createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);
    s.background(220);
  };

  s.draw = () => {
    s.background(220);
    const mouse = s.createVector(s.mouseX, s.mouseY);
    const center = s.createVector(CANVAS_WIDTH / 2, CANVAS_HEIGHT / 2);
    mouse.sub(center);
    mouse.setMag(300);
    s.translate(CANVAS_WIDTH / 2, CANVAS_HEIGHT / 2);
    s.line(0, 0, mouse.x, mouse.y);
  };
};

new p5(sketch);
