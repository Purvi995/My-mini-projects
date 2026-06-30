let canvas= document.createElement("canvas");

canvas.width=500;
canvas.height=500;
canvas.style.border="2px solid white";

document.body.appendChild(canvas);

let ctx= canvas.getContext("2d");


//cricket ground boundary


//green outfield
ctx.beginPath();
ctx.arc(250,250,180,0,2*Math.PI);
ctx.strokeStyle="green";
ctx.lineWidth=5;
ctx.stroke();

ctx.fillStyle="#228B22";
ctx.fill();

console.log("Cricket Ground Drawn");


//pitch
ctx.beginPath();
ctx.rect(220,130,60,240);

ctx.fillStyle="#d2a679";
ctx.fill();

ctx.strokeStyle="#d2a679";
ctx.lineWidth=3;
ctx.stroke();


//crease lines

ctx.strokeStyle="white";
ctx.lineWidth=3;

for(let y of [160,340]){
    ctx.beginPath();
    ctx.moveTo(205,y);
    ctx.lineTo(295,y);
    ctx.stroke();
}

//stump function

function drawStumps(x,y){

    ctx.strokeStyle="white";
    ctx.lineWidth=4;

    for(let i=-1;i<=1;i++){

        ctx.beginPath();
        ctx.moveTo(x+i*8,y);
        ctx.lineTo(x+i*8,y-35);
        ctx.stroke();
    }

}


//stump at both ends

drawStumps(250,150);
drawStumps(250,350);

//fielders at different positions

function drawfielders(x,y,name){

    ctx.beginPath();
    ctx.arc(x,y,8,0,2*Math.PI);

    ctx.fillStyle="blue";
    ctx.fill();

    ctx.strokeStyle="white";
    ctx.stroke();

    //name

    ctx.fillStyle="white";
    ctx.font="12px Arial";
    ctx.fillText(name,x-15,y-12);

}

//positions

drawfielders(250,80,"Bowler");
drawfielders(130,190,"F1");
drawfielders(370,190,"F2");
drawfielders(120,320,"F3");
drawfielders(380,320,"F4");
drawfielders(250,420,"F5");

ctx.beginPath();
ctx.arc(250,210,6,0,2*Math.PI);
ctx.fillStyle="red";
ctx.fill();


console.log("Cricket Ground Drawn");


