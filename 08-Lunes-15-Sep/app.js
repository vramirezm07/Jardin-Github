console.log("boomerang");
console.log(gsap);


// 1. Obtener referencia del canvas
const canvas = document.getElementById("lienzo");
// 2. Definir si es 2D o 3D
const ctx = canvas.getContext('2d'); 
console.log(canvas); //verificar que se obtuvo correctamente

// 1.1. Sincroniar dimensiones del canvas virtual con el viewport
canvas.width=window.innerWidth;
canvas.height=window.innerHeight;


const boomerang = { x: 0, y: 0 };

function dibujarBoomerang(x, y) {
    ctx.beginPath();
    let gradient = ctx.createLinearGradient(
        canvas.width/2 - 400 + x, canvas.height/2 + y,
        canvas.width/2 + 50 + x, canvas.height/2 + y
    );

    gradient.addColorStop(0, "gray");
    gradient.addColorStop(1, "black");
    ctx.fillStyle = gradient;

    // Todas las coordenadas suman x e y al final
    ctx.moveTo(canvas.width/2 - 220 + x, canvas.height/2 - 320 + y);

    ctx.quadraticCurveTo(
        canvas.width/2 + x, canvas.height/2 - 240 + y,
        canvas.width/2 - 240 + x, canvas.height/2 - 120 + y
    );

    ctx.quadraticCurveTo(
        canvas.width/2 - 150 + x, canvas.height/2 - 180 + y,
        canvas.width/2 - 220 + x, canvas.height/2 - 230 + y
    );

    ctx.quadraticCurveTo(
        canvas.width/2 - 150 + x, canvas.height/2 - 290 + y,
        canvas.width/2 - 220 + x, canvas.height/2 - 320 + y
    );

    ctx.fill();
    ctx.closePath();
}


dibujarBoomerang(boomerang.x, boomerang.y);

window.addEventListener("mousedown", function() {
    // Animar X
    gsap.to(boomerang, {
        x:0,
        duration: 4,
        ease: "power2.inOut",
        onUpdate: function() {
            dibujarBoomerang(boomerang.x, boomerang.y);
        }
    });

    // Animar Y en dos fases
    gsap.to(boomerang, {
        y: canvas.height /4 ,
        duration: 2,
        ease: "power2.out", 
        onUpdate: function() {
            dibujarBoomerang( boomerang.x, boomerang.y);
        },
        onComplete: function() { 
            gsap.to(boomerang, {
                y: canvas.height / 2,
                duration: 2,
                ease: "power2.in",
                onUpdate: function() {
                    dibujarBoomerang(boomerang.x, boomerang.y);
                }
            });
        }
    });
});


