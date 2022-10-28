const color = document.getElementById("color")
const canvas = document.querySelector("canvas")
const cxt = canvas.getContext("2d")
const lineWidth = document.getElementById("line-width")
const colorOptions = Array.from(document.getElementsByClassName("color-option"));
const modeBtn = document.getElementById("mode-Btn")

canvas.height = 600;
canvas.width = 600;
cxt.lineWidth = lineWidth.value;
let isPainting = false;
let isFilling= false;

function onMove(event) {
    if (isPainting) {
        cxt.lineTo(event.offsetX, event.offsetY);
        cxt.stroke();
        return;
    }
    cxt.beginPath();
    cxt.moveTo(event.offsetX, event.offsetY);
}
function startPainting() {
    isPainting = true;
}
function canclePainting() {
    isPainting = false;
}
function onLineWidthChange(event) {
    cxt.lineWidth = event.target.value;
    console.log(event.target.value);
}
function onColorChange(event) {
    cxt.strokeStyle = event.target.value;
    cxt.fillStyle = event.target.value;
}
function onColorClick(event) {
    const colorValue = event.target.dataset.color;
    cxt.strokeStyle = colorValue;
    cxt.fillStyle = colorValue;
    color.value = colorValue;
}
function onModeClick(){
    if (isFilling){
        isFilling = false
        modeBtn.innerText = "DRAW";
    } else {
        isFilling = true
        modeBtn.innerText = "FILL";
    }
}

canvas.addEventListener("mousemove", onMove);
canvas.addEventListener("mousedown", startPainting);
canvas.addEventListener("mouseup", canclePainting);
canvas.addEventListener("mouseleave", canclePainting);

lineWidth.addEventListener("change", onLineWidthChange);
color.addEventListener("change", onColorChange);
colorOptions.forEach((color) => color.addEventListener("click", onColorClick));

modeBtn.addEventListener("click", onModeClick);