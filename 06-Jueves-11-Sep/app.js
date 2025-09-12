console.log("");

// 1. Obtener referencia del canvas
const canvas = document.getElementById("lienzo");
console.log(canvas); //verificar que se obtuvo correctamente

// 1.1. Sincroniar dimensiones del canvas virtual con el viewport
canvas.width=window.innerWidth;
canvas.height=window.innerHeight;

// 2. Definir si es 2D o 3D
const ctx = canvas.getContext('2d'); 


function draw() {

  const n = 5; // cantidad de bloques por lado
  const sy = canvas.height / n;
  const sx = canvas.width / n;
  const nl = 12; // número de líneas por bloque

  for (let x = 0; x < n; x++) {
    for (let y = 0; y < n; y++) {
      const px = x * sx;
      const py = y * sy;

      // alterna orientación
      if ((x + y) % 2 === 0) {
        // Líneas verticales
        const lx = sx / nl;
        ctx.strokeStyle = "white";
        ctx.lineWidth = 5;
        for (let i = 0; i < nl; i++) {
          ctx.beginPath();
          const offset = Math.sin(i * 0.4 + y) * 6;
          ctx.moveTo(px + i * lx + offset , py);
          ctx.lineTo(px + i * lx - offset, py + sy);
          ctx.stroke();
        }
      } else {
        // Líneas horizontales
        const ly = sy / nl;
        ctx.strokeStyle = "white";
        ctx.lineWidth = 5;
        for (let i = 0; i < nl; i++) {
          ctx.beginPath();
          const offset = Math.cos(i * 0.4 + x) * 6; // ondulación
          ctx.moveTo(px, py + i * ly + offset);
          ctx.lineTo(px + sx, py + i * ly - offset);
          ctx.stroke();
        }
      }
    }
  }
}

draw();
