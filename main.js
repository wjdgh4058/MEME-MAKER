const canvas = document.querySelector("canvas");

const lineWidth = document.getElementById("line-width");

const color = document.getElementById("color");

const colorOptions = Array.from(
  document.getElementsByClassName("color-option")
);

const ctx = canvas.getContext("2d");

canvas.width = 800;
canvas.height = 800;

ctx.lineWidth = lineWidth.value;

let isPainting = false;

function onMove(e) {
  if (isPainting) {
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();
    return;
  }

  ctx.moveTo(e.offsetX, e.offsetY);
}

function startPainting() {
  isPainting = true;
}

function cancelPainting() {
  isPainting = false;
  ctx.beginPath();
}

function onLineWidthChange(e) {
  ctx.lineWidth = e.target.value;
}

function changeColor(value) {
  ctx.strokeStyle = value;
  ctx.fillStyle = value;
}

function onColorChange(e) {
  changeColor(e.target.value);
}

function onColorClick(e) {
  const colorValue = e.target.dataset.color;
  changeColor(colorValue);
  color.value = colorValue;
}

canvas.addEventListener("mousemove", onMove);
canvas.addEventListener("mousedown", startPainting);
canvas.addEventListener("mouseup", cancelPainting);
canvas.addEventListener("mouseleave", cancelPainting);

lineWidth.addEventListener("change", onLineWidthChange);
color.addEventListener("change", onColorChange);
colorOptions.forEach((color) => color.addEventListener("click", onColorClick));

/* function onclick(e) {
  ctx.beginPath();
  ctx.moveTo(0, 0);
  const color = colors[Math.floor(Math.random() * colors.length)];
  ctx.strokeStyle = color;
  ctx.lineTo(e.offsetX, e.offsetY);
  ctx.stroke();
}

canvas.addEventListener("mousemove", onclick); */

/* ctx.fillRect(200, 200, 50, 200);
ctx.fillRect(400, 200, 50, 200);
ctx.lineWidth = 2;
ctx.fillRect(300, 300, 50, 100);

ctx.fillRect(200, 200, 200, 20);

ctx.moveTo(200, 200);
ctx.lineTo(325, 100);
ctx.lineTo(450, 200);
ctx.fill(); */

/* ctx.fillRect(210 - 40, 200 - 30, 15, 100);
ctx.fillRect(350 - 40, 200 - 30, 15, 100);
ctx.fillRect(260 - 40, 200 - 30, 60, 200);

ctx.arc(250, 100, 50, 0, 2 * Math.PI);
ctx.fill();

ctx.beginPath();
ctx.fillStyle = "white";

ctx.arc(260 + 10, 80, 8, 0, 1 * Math.PI);
ctx.arc(220 + 10, 80, 8, 0, 1 * Math.PI);
ctx.fill(); */
