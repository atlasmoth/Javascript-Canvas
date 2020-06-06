const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// automatically resize canvas
window.addEventListener("resize", (e) => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});
let mouse = { x: window.innerWidth / 2, y: window.innerHeight / 2 };

canvas.addEventListener("mousemove", (e) => {
  mouse.x = e.clientX;
  mouse.y = e.clientY;
});
//end of resize
// random color generator
function randColor() {
  //
  const rand = () => Math.floor(Math.random() * 266);
  return `rgb(${rand()},${rand()},${rand()})`;
}
// particle function

class Particle {
  constructor(radius) {
    this.x = mouse.x;
    this.y = mouse.y;
    this.radius = randomNumber(10, radius);
    this.color = randColor();
    this.radians = Math.random() * 360;
    this.velocity = 1;
  }
  draw({ x, y }) {
    ctx.beginPath();
    ctx.strokeStyle = this.color;
    ctx.lineWidth = this.radius;
    ctx.lineCap = "round";
    ctx.moveTo(x, y);
    ctx.lineTo(this.x, this.y);
    ctx.stroke();
    ctx.closePath();
  }
  update() {
    // move points overtime over a periodic function
    const lastPoint = { x: this.x, y: this.y };
    this.radians += this.velocity;

    this.x =
      mouse.x + Math.cos((this.radians * Math.PI) / 180) * this.radius * 5.5;
    this.y =
      mouse.y / 2 +
      Math.sin((this.radians * Math.PI) / 180) * this.radius * 5.5;

    this.draw(lastPoint);
  }
}

// particles storage

const particles = [];

function init() {
  for (let i = 0; i < 50; i++) {
    particles.push(new Particle(40));
  }
}

(() => init())();
// random number generator within a range
function randomNumber(min, max) {
  return Math.random() * (max - min) + min;
}
//
function animate() {
  ctx.fillStyle = `rgba(255,255,255,0.05)`;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  particles.forEach((particle) => {
    particle.update();
  });
  requestAnimationFrame(animate);
}

animate();
