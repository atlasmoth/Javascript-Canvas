const canvas = document.getElementById("canvas");

const ctx = canvas.getContext("2d");

// // // fillReact
// // ctx.fillStyle = "maroon";
// // ctx.fillRect(20, 20, 150, 100);
// // ctx.fillRect(200, 50, 150, 100);

// // // strokeRect

// // ctx.lineWidth = 5;
// // ctx.strokeStyle = "blue";
// // ctx.strokeRect(100, 200, 100, 100);
// // setTimeout(() => {
// //   ctx.clearRect(20, 20, 150, 100);
// // }, 3000);

// // // fill text
// // ctx.font = "30px segoe ui";
// // ctx.fillStyle = "yellow";
// // ctx.fillText("Chale you dey bore", 400, 50);

// // // strokeText()
// // ctx.strokeStyle = "orange";
// // ctx.strokeText("Hello world", 400, 100);

// // // triangle 1
// // ctx.beginPath();
// // ctx.moveTo(50, 50);
// // ctx.lineTo(150, 50);
// // ctx.lineTo(100, 150);
// // ctx.lineTo(50, 50);
// // ctx.stroke();
// // ctx.fillStyle = "coral";
// // ctx.fill();

// // // triangle 2
// // ctx.beginPath();
// // ctx.moveTo(200, 200);
// // ctx.lineTo(300, 200);
// // ctx.lineTo(250, 300);
// // ctx.lineTo(200, 200);
// // ctx.stroke();
// // ctx.fillStyle = "lightblue";
// // ctx.fill();

// //ctx circles
// // big face cirlce
// const pi = Math.PI;
// const { height: h, width: w } = canvas;

// // face 1
// ctx.beginPath();
// ctx.arc(w / 2, h / 2, w / 4, 0, 2 * pi, true);
// ctx.stroke();

// // move to mouth
// ctx.beginPath();
// ctx.arc(w / 2, h / 2 + 50, 80, 0, pi);
// ctx.stroke();

// // eye 1
// ctx.beginPath();
// ctx.arc(w * 0.4, h * 0.35, 25, 0, 2 * pi, true);
// // ctx.fill();
// ctx.stroke();

// // face 2
// ctx.beginPath();
// ctx.arc(w * 0.6, h * 0.35, 25, 0, 2 * pi, true);
// // ctx.fill();
// ctx.stroke();

// animations bruh

const circle = {
  x: 200,
  y: 200,
  size: 30,
  dx: 5,
  dy: 4,
};

function drawCircle(
  circle = {
    x: 200,
    y: 200,
    size: 30,
    dx: 5,
    dy: 4,
  }
) {
  ctx.beginPath();
  ctx.arc(circle.x, circle.y, circle.size, 0, Math.PI * 2);
  ctx.fill();
}

function update() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  drawCircle(circle);

  // implement horizontal reflection
  if (circle.x + 30 >= canvas.width) {
    circle.dx = -circle.dx;
  } else if (circle.x - 30 <= 0) {
    circle.dx = Math.abs(circle.dx);
  }
  circle.x += circle.dx;
  // implement vertical reflection
  if (circle.y + 30 >= canvas.height) {
    circle.dy = -circle.dy;
  } else if (circle.y - 30 <= 0) {
    circle.dy = Math.abs(circle.dy);
  }
  circle.y += circle.dy;

  // circle.y += circle.dy;
  requestAnimationFrame(update);
}

update();
