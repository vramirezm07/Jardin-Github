console.log("kandinsky");
// 1. Obtener referencia del canvas
const canvas = document.getElementById("lienzo");
console.log(canvas); //verificar que se obtuvo correctamente

// 1.1. Sincroniar dimensiones del canvas virtual con el viewport
canvas.width=window.innerWidth;
canvas.height=window.innerHeight;

// 2. Definir si es 2D o 3D
const ctx = canvas.getContext('2d'); 

// 3. Definir los estilos de la linea
ctx.beginPath();
ctx.lineWidth = 2;
ctx.strokeStyle = "white";

// 4. Definir los putnos que forman la linea
    //ctx.moveTo(x,y);
ctx.moveTo(190,144); //punto inicial
ctx.lineTo(390,144); //punto final

ctx.moveTo(190,244); 
ctx.lineTo(390,244); 

// 5. Renderizar la linea
ctx.stroke();
ctx.closePath();

// 6. Definir los estilos del rectangulo
ctx.beginPath();
ctx.strokeStyle = "red";
ctx.lineWidth = 4;
ctx.fillStyle = "gray";

// 7. Definir el rectangulo
ctx.rect(450,244, 200, 100); //(x,y, ancho, alto)

// 8. Renderizar el rectangulo
ctx.fill();
ctx.stroke();
ctx.closePath();


// Sintaxis elipse o circulo}
ctx.beginPath();

// 9. Estilos de la elipse
ctx.fillStyle = "white";

// 10. Definir la elipse
ctx.ellipse(300, 400, 205, 205, 0, 0, Math.PI*0.7); //(x,y, radioX, radioY, rotacion, anguloInicio, anguloFinal)

// 11. Renderizar la elipse
ctx.fill();
ctx.closePath();

