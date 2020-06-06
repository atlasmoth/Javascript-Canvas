const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// automatically resize canvas
window.addEventListener("resize", (e) => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
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
    this.x = window.innerWidth / 2;
    this.y = window.innerHeight / 2;
    this.radius = radius;
    this.color = randColor();
    this.radians = 0;
  }
  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    ctx.fillStyle = this.color;
    ctx.fill();
    ctx.closePath();
  }
  update() {
    this.x += Math.cos(this.radians);
    this.draw();
  }
}

// particles storage

const particles = [];

function init() {
  for (let i = 0; i < 1; i++) {
    particles.push(new Particle(10));
  }
}

(() => init())();

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particles.forEach((particle) => {
    particle.update();
  });
  console.log("This is running");
  // requestAnimationFrame(animate);
}

animate();
