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
//ctx.beginPath();
//ctx.lineWidth = 2;
//ctx.strokeStyle = "red";
//ctx.moveTo(canvas.width/2,0); //punto inicial
//ctx.lineTo(canvas.width/2,canvas.height); //punto final

//ctx.moveTo(0,canvas.height/2);
//ctx.lineTo(canvas.width,canvas.height/2);

//ctx.stroke();
//ctx.closePath();


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

ctx.moveTo(canvas.width/2 - 270, canvas.height/2-230);
ctx.lineTo(canvas.width/2 - 240,canvas.height/2-400);

ctx.moveTo(canvas.width/2 - 274, canvas.height/2-235);
ctx.lineTo(canvas.width/2 - 250,canvas.height/2-400);

ctx.moveTo(canvas.width/2-260, canvas.height/2-320);
ctx.lineTo(canvas.width/2-220,canvas.height/2-350);

ctx.moveTo(canvas.width/2-450, canvas.height/2+200);
ctx.lineTo(canvas.width/2+430,canvas.height/2-340);

ctx.moveTo(canvas.width/2-310, canvas.height/2+90);
ctx.lineTo(canvas.width/2-105,canvas.height/2-30);

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
  canvas.height/2-201,   // centro y
  15,                // radio
  0,                 // ángulo inicial
  Math.PI * 1.7      // ángulo final (3/4 de círculo)
);

//derecho
ctx.moveTo(canvas.width/2-45, canvas.height/2-260); // mover al centro
ctx.arc(
  canvas.width/2-45,    // centro x
  canvas.height/2-260,   // centro y
  15,                // radio
  0,                 // ángulo inicial
  Math.PI * 1.7      // ángulo final (3/4 de círculo)
);

ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.fillStyle="#F0E7D5";

ctx.moveTo(canvas.width/2-190, canvas.height/2-200); // mover al centro
ctx.arc(
  canvas.width/2-189,    // centro x
  canvas.height/2-200,   // centro y
  13,                // radio
  0,                 // ángulo inicial
  Math.PI * 1.7      // ángulo final (3/4 de círculo)
);
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.lineWidth=1.5;
ctx.strokeStyle= "black";

//izquierdo
ctx.moveTo(canvas.width/2- 200, canvas.height/2-215);
ctx.lineTo(canvas.width/2 - 175, canvas.height/2-215);

ctx.moveTo(canvas.width/2- 210, canvas.height/2-210);
ctx.lineTo(canvas.width/2 - 225, canvas.height/2-215);

ctx.moveTo(canvas.width/2- 223, canvas.height/2-205);
ctx.lineTo(canvas.width/2 - 210, canvas.height/2-198);
ctx.lineTo(canvas.width/2 - 226, canvas.height/2-198);

ctx.moveTo(canvas.width/2- 208, canvas.height/2-187);
ctx.lineTo(canvas.width/2 - 220, canvas.height/2-175);

ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.lineWidth=3;
ctx.strokeStyle= "black";
//Derecho
ctx.moveTo(canvas.width/2- 65, canvas.height/2-265);
ctx.lineTo(canvas.width/2 - 40, canvas.height/2-278);

ctx.moveTo(canvas.width/2- 35, canvas.height/2-280);
ctx.lineTo(canvas.width/2+4, canvas.height/2-290);

ctx.moveTo(canvas.width/2- 25, canvas.height/2-280);
ctx.lineTo(canvas.width/2+9, canvas.height/2-285);

ctx.moveTo(canvas.width/2- 10, canvas.height/2-277);
ctx.lineTo(canvas.width/2+5, canvas.height/2-280);

ctx.stroke();
ctx.closePath();


ctx.beginPath();
ctx.fillStyle = "black";
ctx.rect(canvas.width/2-200,canvas.height/2 -180, 30, 8); //(x,y, ancho, alto)
ctx.moveTo(canvas.width/2- 245, canvas.height/2-240);
ctx.lineTo(canvas.width/2 - 195, canvas.height/2-260);
ctx.lineTo(canvas.width/2 - 190, canvas.height/2-285);
ctx.lineTo(canvas.width/2 - 240, canvas.height/2-265);
ctx.lineTo(canvas.width/2- 245, canvas.height/2-240);
ctx.fill();
ctx.closePath();
 

// cahchete

ctx.beginPath();
ctx.lineWidth= 4;
ctx.strokeStyle= "#f31d93ff";
ctx.ellipse(canvas.width/2 - 10, canvas.height/2-200, 45, 45, 0, 0, Math.PI*3); //(x,y, radioX, radioY, rotacion, anguloInicio, anguloFinal)
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.fillStyle= "#3846ff";
ctx.moveTo(canvas.width/2 - 80, canvas.height/2-220);
ctx.lineTo(canvas.width/2 - 20, canvas.height/2-230);
ctx.lineTo(canvas.width/2 - 55, canvas.height/2-155);
ctx.moveTo(canvas.width/2 - 80, canvas.height/2-220);
ctx.fill();
ctx.closePath();

//pelo


ctx.beginPath();
ctx.lineWidth= 4;
ctx.strokeStyle= "#bf0000";
ctx.moveTo(canvas.width/2 - 230, canvas.height/2-40);
ctx.lineTo(canvas.width/2 - 270,canvas.height/2-180);

ctx.moveTo(canvas.width/2 - 240, canvas.height/2-50);
ctx.lineTo(canvas.width/2 - 278,canvas.height/2-180);

ctx.moveTo(canvas.width/2 - 205, canvas.height/2-30);
ctx.lineTo(canvas.width/2 - 278,canvas.height/2-120);

ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.fillStyle= "#bf0000";
ctx.ellipse(canvas.width/2 + 250, canvas.height/2-125, 85, 90, 0, 0, Math.PI*3); //(x,y, radioX, radioY, rotacion, anguloInicio, anguloFinal)
ctx.fill();
ctx.closePath();