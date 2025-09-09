console.log("kandinsky");

// 1. Obtener referencia del canvas
const canvas = document.getElementById("lienzo");
console.log(canvas); //verificar que se obtuvo correctamente

// 1.1. Sincroniar dimensiones del canvas virtual con el viewport
canvas.width=window.innerWidth;
canvas.height=window.innerHeight;

// 2. Definir si es 2D o 3D
const ctx = canvas.getContext('2d'); 

//Linea referencia
ctx.beginPath();
ctx.lineWidth = 2;
ctx.strokeStyle = "red";
ctx.moveTo(canvas.width/2,0); //punto inicial
ctx.lineTo(canvas.width/2,canvas.height); //punto final

ctx.moveTo(0,canvas.height/2);
ctx.lineTo(canvas.width,canvas.height/2);

ctx.stroke();
ctx.closePath();


// Barba
ctx.beginPath();
ctx.lineWidth= 1.5;
ctx.strokeStyle= "black";
ctx.ellipse(canvas.width/2 - 35, canvas.height/2, 35, 20, 0, 0, Math.PI*3); //(x,y, radioX, radioY, rotacion, anguloInicio, anguloFinal)
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 1.5;
ctx.strokeStyle = "black";
ctx.moveTo(canvas.width/2 - 75, canvas.height/2 - 25); //punto inicial
ctx.lineTo(canvas.width/2 - 20 ,canvas.height/2 - 35); //punto final

ctx.moveTo(canvas.width/2 - 55, canvas.height/2 - 28); 
ctx.lineTo(canvas.width/2 - 15 ,canvas.height/2 - 30);

ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 1.5;
ctx.strokeStyle = "black";
ctx.fillStyle = "black";
ctx.moveTo(canvas.width/2 -60, canvas.height/2 + 40); //punto inicial
ctx.lineTo(canvas.width/2, canvas.height/2+ 25);
ctx.lineTo(canvas.width/2- 5, canvas.height/2 + 70);
ctx.lineTo(canvas.width/2 -60, canvas.height/2 + 40);
ctx.fill();
ctx.stroke();
ctx.closePath();


