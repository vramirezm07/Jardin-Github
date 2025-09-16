console.log("boomerang");
console.log(gsap);


const canvas = document.getElementById("lienzo");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Boomerang animable
const boomerang = { x: -500, y: 0 , rotation: 0};

function dibujarBoomerang(x, y, rotation) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.save();
    // Traslada el sistema de coordenadas al centro + desplazamiento animado
    ctx.translate(canvas.width / 2 + x, canvas.height / 2 + y);
    ctx.rotate(rotation);

    ctx.beginPath();
    let gradient = ctx.createLinearGradient(-400, 0, 50, 0);
    gradient.addColorStop(0, "gray");
    gradient.addColorStop(1, "black");
    ctx.fillStyle = gradient;

    // Dibuja el boomerang en coordenadas relativas a (0,0)
    ctx.moveTo(-220, -320);
    ctx.quadraticCurveTo(0, -240, -240, -120);
    ctx.quadraticCurveTo(-150, -180, -220, -230);
    ctx.quadraticCurveTo(-150, -290, -220, -320);

    ctx.fill();
    ctx.closePath();
    ctx.restore();
}

// Dibujo inicial
dibujarBoomerang(boomerang.x, boomerang.y, boomerang.rotation);

window.addEventListener("mousedown", function() {
    gsap.to(boomerang, {
        x: canvas.width / 2 + 200, // ajusta este valor para que no se salga del canvas
        duration: 2,
        ease: "power2.inOut",
        rotation: Math.PI * 4, // gira 2 vueltas mientras se mueve
        onUpdate: function() {
            dibujarBoomerang(boomerang.x, boomerang.y,boomerang.rotation);
        },
        onComplete: function() {
            // Regreso a la posición inicial
            gsap.to(boomerang, {
                x: -500, 
                duration: 2,
                ease: "power2.inOut",
                 rotation: Math.PI * -4,
                onUpdate: function() {
                    dibujarBoomerang(boomerang.x, boomerang.y,boomerang.rotation);
                }
            });
        }
    });

    // Animar Y (sube y baja)
    gsap.to(boomerang, {
        y: canvas.height / 4,  // sube relativo al centro
        duration: 2,
        ease: "power2.out",
        onUpdate: function() {
            dibujarBoomerang(boomerang.x, boomerang.y,boomerang.rotation);
        },
        onComplete: function() {
            // Volver al centro
            gsap.to(boomerang, {
                y: 0,
                duration: 2,
                ease: "power2.in",
                onUpdate: function() {
                    dibujarBoomerang(boomerang.x, boomerang.y,boomerang.rotation);
                }
            });
        }
    });
});

