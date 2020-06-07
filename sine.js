const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

canvas.width = innerWidth;
canvas.height = innerHeight;

function main() {
  let y = 0;
  const speed = 3;
  const animate = () => {
    ctx.beginPath();
    ctx.moveTo(y, 300 + Math.sin((y * Math.PI) / 180) * 100);
    y += speed;

    ctx.lineTo(y, 300 + Math.sin((y * Math.PI) / 180) * 100);
    ctx.lineCap = "round";
    ctx.stroke();
    console.log(300 + Math.sin((y * Math.PI) / 180));
    if (y < canvas.width) {
      requestAnimationFrame(animate);
    }
  };
  return {
    animate,
  };
}

main().animate();
