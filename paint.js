const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// // random colour generator
// const {height,width} = canvas
// function randColor() {
//   //
//   const rand = () => Math.floor(Math.random() * 266);
//   return `rgb(${rand()},${rand()},${rand()})`;
// }

// // random circle generator
// function randCircle(num = 100) {
//   const radius = () => Math.floor((Math.random() * width) / 8) + 5;
//   const x = () => {
//     return Math.floor(Math.random() * width - width / 8);
//   };
//   const y = () => {
//     return Math.floor(Math.random() * height - height / 8);
//   };

//   for (let count = 0; count < num; count++) {
//     ctx.beginPath();
//     ctx.arc(x(), y(), radius(), 0, Math.PI * 2);
//     ctx.strokeStyle = randColor();
//     ctx.stroke();
//   }
// }

// randCircle();

let painting = false;
function randColor() {
  //
  const rand = () => Math.floor(Math.random() * 266);
  return `rgb(${rand()},${rand()},${rand()})`;
}

function startPosition() {
  painting = true;
}

function endPosition() {
  painting = false;
  ctx.beginPath();
}

// event listeners
// start painting
canvas.addEventListener("mousedown", (e) => {
  startPosition();
});
// end painting
canvas.addEventListener("mouseup", (e) => {
  endPosition();
});

canvas.addEventListener("mousemove", (e) => {
  if (painting) {
    ctx.lineWidth = 10;
    ctx.lineCap = "round";
    // ctx.moveTo(e.clientX, e.clientY);
    ctx.lineTo(e.clientX, e.clientY);
    ctx.strokeStyle = randColor();
    ctx.stroke();
  }
});
