const canvas = document.getElementById("jsCanvas");
const ctx = canvas.getContext("2d");
const colors = document.getElementsByClassName("jsColor");

canvas.width = 700;
canvas.height = 700;

// default
ctx.strokeStyle = "#2c2c2c";
ctx.lineWidth = 2.5;

let painting = false;

function stopPainting() {
    painting = false;
}

function startPainting() {
    painting = true;
}

function onMouseMove(event) {
    const x = event.offsetX;
    const y = event.offsetY;

    // https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D
    if (!painting) {
        // 클릭 되어있지 않을 때
        ctx.beginPath(); // path 만들기 시작
        ctx.moveTo(x, y); // x, y를 path로 옮긴다.
    } else {
        // 클릭 되어있을 때
        ctx.lineTo(x, y); // 이전 위치에서 지금 위치까지 선을 만든다.
        ctx.stroke(); // 만들어진 선에 획을 긋는다. (실제 선이 그려짐)
    }
}

function handleColorClick(event) {
    const color = event.target.style.backgroundColor;
    ctx.strokeStyle = color;
}

if (canvas) {
    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mousedown", startPainting);
    canvas.addEventListener("mouseup", stopPainting);
    canvas.addEventListener("mouseleave", stopPainting);
}

Array.from(colors).forEach((color) =>
    color.addEventListener("click", handleColorClick)
);
