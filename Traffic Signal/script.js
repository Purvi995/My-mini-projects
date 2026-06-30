let canvas= document.createElement("canvas");

canvas.width=200;
canvas.height=400;

document.body.appendChild(canvas);

let ctx= canvas.getContext("2d");

//Signal Box
ctx.strokeRect(50,20,100,250);
ctx.fillStyle="black";
ctx.fillRect(50,20,100,250);

//Signal Stand
ctx.fillRect(95,270,10,340);

//Red Light
ctx.beginPath();
ctx.arc(100,70,30,0,2*Math.PI);
ctx.fillStyle="red";
ctx.fill();
ctx.stroke();

//Yellow light
ctx.beginPath();
ctx.arc(100,145,30,0,2*Math.PI);
ctx.fillStyle="yellow";
ctx.fill();
ctx.stroke();

//Green light
ctx.beginPath();
ctx.arc(100,220,30,0,2*Math.PI);
ctx.fillStyle="green";
ctx.fill();
ctx.stroke();





console.log("Traffic Signal Drawn");