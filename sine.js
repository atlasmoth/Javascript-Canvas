const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

canvas.width = innerWidth;
canvas.height = innerHeight;

window.addEventListener("resize", (e) => {
  canvas.width = innerWidth;
  canvas.height = innerHeight;
});

function randomNumber(min, max) {
  return Math.random() * (max - min) + min;
}
function randColor() {
  //
  const rand = () => Math.floor(Math.random() * 266);
  return `rgb(${rand()},${rand()},${rand()})`;
}
// formula for sinusodial modelling
// y = Asin(Bx -c) + D
// A = amplitude
// B = period
// D = vertical translation
function main() {
  const speed = 1;
  let displacement = 0;

  function animate() {
    //
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const amplitude = randomNumber(10, 200);
    const period = randomNumber(1, 10);
    const vertical = innerHeight / 2;
    // looping the line bruh
    for (let x = 0; x < innerWidth; x++) {
      ctx.beginPath();
      ctx.moveTo(
        x,
        amplitude * Math.sin((period * (x * Math.PI)) / 180) + vertical
      );
      ctx.lineTo(
        x + speed,
        amplitude * Math.sin((period * (x + speed) * Math.PI) / 180) + vertical
      );
      ctx.lineWidth = "5px";
      ctx.lineCap = "round";
      // ctx.strokeStyle = randColor();
      ctx.stroke();
    }
    //
    // requestAnimationFrame(animate);
  }
  return {
    animate,
  };
}

main().animate();
