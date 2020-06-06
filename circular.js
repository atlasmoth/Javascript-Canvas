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
    this.velocity = 1;
  }
  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fillStyle = this.color;
    ctx.fill();
    ctx.closePath();
  }
  update() {
    // move points overtime over a periodic function
    this.radians += this.velocity;
    this.x =
      window.innerWidth / 2 + Math.cos((this.radians * Math.PI) / 180) * 100;
    this.y =
      window.innerHeight / 2 + Math.sin((this.radians * Math.PI) / 180) * 100;

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

  requestAnimationFrame(animate);
}

animate();
