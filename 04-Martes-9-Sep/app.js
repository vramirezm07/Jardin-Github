console.log("");

// 1. Obtener referencia del canvas
const canvas = document.getElementById("lienzo");
console.log(canvas); //verificar que se obtuvo correctamente

// 1.1. Sincroniar dimensiones del canvas virtual con el viewport
canvas.width=window.innerWidth;
canvas.height=window.innerHeight;

// 2. Definir si es 2D o 3D
const ctx = canvas.getContext('2d'); 


  const width = canvas.width;
  const height = canvas.height;
  var distancia = 10;
  const lines = [];   // Arreglo para guardar propiedades de cada línea

// Generamos líneas horizontales
  for (let y = 0; y <= height; y += distancia) {
    lines.push({
      y: y,
      offset: Math.random() * Math.PI * 2, // desfase de tiempo único
      color: `hsl(${Math.random() * 220}, 3%, 60%)`,
      amplitude: Math.random() * 10 + 5,
      speed: Math.random() * 0.01
    });
  }

  function draw(t) {
    ctx.clearRect(0, 0, width, height);
    ctx.lineWidth = Math.random();

    for (let line of lines) {
      const wave = Math.sin(t * line.speed + line.offset) * line.amplitude;

      ctx.beginPath();
      ctx.strokeStyle = line.color;
      ctx.moveTo(0, line.y + wave);
      ctx.lineTo(width, line.y + wave);
      ctx.stroke();
    }

    requestAnimationFrame(draw);
  }

  requestAnimationFrame(draw);