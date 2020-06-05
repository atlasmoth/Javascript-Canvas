const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const { height, width } = canvas;

// random colour generator
function randColor() {
  //
  const rand = () => Math.floor(Math.random() * 266);
  return `rgb(${rand()},${rand()},${rand()})`;
}

// random circle generator
function randCircle(num = 10000) {
  const radius = () => Math.floor((Math.random() * width) / 8) + 5;
  const x = () => {
    return Math.floor(Math.random() * width - width / 8);
  };
  const y = () => {
    return Math.floor(Math.random() * height - height / 8);
  };

  for (let count = 0; count < num; count++) {
    ctx.beginPath();
    ctx.arc(x(), y(), radius(), 0, Math.PI * 2);
    ctx.strokeStyle = randColor();
    ctx.stroke();
  }
}

randCircle();
