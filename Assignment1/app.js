const canvas = document.querySelector("canvas")
const cxt = canvas.getContext("2d")

canvas.height = 600;
canvas.width = 600;

cxt.fillRect (200, 200, 50, 100);
cxt.fillRect (275, 200, 100, 300);
cxt.fillRect (400, 200, 50, 100);

cxt.arc(325, 100, 75, 0, Math.PI * 2);
cxt.fill();

cxt.beginPath ();
cxt.arc(300, 75, 10, Math.PI, Math.PI * 2);
cxt.fillStyle = "yellow";
cxt.fill();

cxt.beginPath ();
cxt.arc(350, 75, 10, Math.PI, Math.PI * 2);
cxt.fillStyle = "blue";
cxt.fill();

cxt.beginPath ();
cxt.arc(325, 100, 20, 0, Math.PI * 1);
cxt.fillStyle = "green";
cxt.fill();