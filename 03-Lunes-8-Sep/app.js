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

//labios
ctx.beginPath();
ctx.lineWidth= 1.5;
ctx.strokeStyle= "black";
ctx.ellipse(canvas.width/2 - 75, canvas.height/2-50, 25, 12, -0.34, 0, Math.PI*3); //(x,y, radioX, radioY, rotacion, anguloInicio, anguloFinal)
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.lineWidth=2;
ctx.strokeStyle= "black";
ctx.moveTo(canvas.width/2- 98, canvas.height/2-53);
ctx.lineTo(canvas.width/2 - 60, canvas.height/2-68);

ctx.moveTo(canvas.width/2- 105,canvas.height/2-53);
ctx.lineTo(canvas.width/2- 80,canvas.height/2-63);
ctx.lineTo(canvas.width/2- 110,canvas.height/2-83);
ctx.lineTo(canvas.width/2- 105,canvas.height/2-53);

ctx.moveTo(canvas.width/2- 110,canvas.height/2-55);
ctx.lineTo(canvas.width/2- 114,canvas.height/2-80);

ctx.moveTo(canvas.width/2-85, canvas.height/2-83);
ctx.lineTo(canvas.width/2-75, canvas.height/2-93);
ctx.lineTo(canvas.width/2-45, canvas.height/2-90);
ctx.stroke();
ctx.closePath();

//Forma de la cara
ctx.beginPath();
ctx.lineWidth=4;
ctx.strokeStyle= "black";
ctx.moveTo(canvas.width/2- 60, canvas.height/2+25);
ctx.lineTo(canvas.width/2 - 200, canvas.height/2-65);

ctx.moveTo(canvas.width/2 - 160, canvas.height/2-40);
ctx.lineTo(canvas.width/2 - 200,canvas.height/2-135);

ctx.stroke();
ctx.closePath();

// Nariz
ctx.beginPath();
ctx.lineWidth= 4;
ctx.strokeStyle= "black";
ctx.ellipse(canvas.width/2 - 140, canvas.height/2-160, 21, 21, 0, 0, Math.PI*3); //(x,y, radioX, radioY, rotacion, anguloInicio, anguloFinal)

ctx.moveTo(canvas.width/2 - 115, canvas.height/2-143);
ctx.lineTo(canvas.width/2 - 65, canvas.height/2-140);

ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.lineWidth= 2;
ctx.strokeStyle= "black";
ctx.moveTo(canvas.width/2 - 175, canvas.height/2 - 270);
// Curva hacia la derecha
ctx.quadraticCurveTo(
  canvas.width/2 - 135, // control a la derecha
  canvas.height/2 - 235, 
  canvas.width/2 - 155, // punto final (abajo)
  canvas.height/2 - 190
);

ctx.moveTo(canvas.width/2 - 150, canvas.height/2 - 250);
// Curva hacia la derecha
ctx.quadraticCurveTo(
  canvas.width/2 - 138, // control a la derecha
  canvas.height/2 - 235, 
  canvas.width/2 - 143, // punto final (abajo)
  canvas.height/2 - 205
);

ctx.stroke();
ctx.closePath();

//ojos

ctx.beginPath();
ctx.fillStyle="black";

ctx.moveTo(canvas.width/2-188, canvas.height/2-200); // mover al centro
ctx.arc(
  canvas.width/2-188,    // centro x
  canvas.height/2-200,   // centro y
  17,                // radio
  0,                 // ángulo inicial
  Math.PI * 1.5      // ángulo final (3/4 de círculo)
);
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.fillStyle="white";

ctx.moveTo(canvas.width/2-190, canvas.height/2-200); // mover al centro
ctx.arc(
  canvas.width/2-190,    // centro x
  canvas.height/2-200,   // centro y
  15,                // radio
  0,                 // ángulo inicial
  Math.PI * 1.5      // ángulo final (3/4 de círculo)
);
ctx.fill();
ctx.closePath();

ctx.beginPath();

ctx.closePath();


