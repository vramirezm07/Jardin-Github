console.log("boomerang");
console.log(gsap);


const canvas = document.getElementById("lienzo");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Boomerang animable
const boomerang = { x: -500, y: 0 };

function dibujarBoomerang(x, y) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.save();
    // Traslada el sistema de coordenadas al centro + desplazamiento animado
    ctx.translate(canvas.width / 2 + x, canvas.height / 2 + y);

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
dibujarBoomerang(boomerang.x, boomerang.y);

window.addEventListener("mousedown", function() {
    // Animar horizontal (x)
    gsap.to(boomerang, {
        x: canvas.width / 2,
        duration: 4,
        ease: "power2.inOut",
        onUpdate: () => dibujarBoomerang(boomerang.x, boomerang.y)
    });

    // Animar vertical (y) sube y baja
    gsap.to(boomerang, {
        y: canvas.height / 2 - 100, // ajusta para que no se salga
        duration: 2,
        ease: "power2.out",
        onUpdate: () => dibujarBoomerang(boomerang.x, boomerang.y),
        onComplete: () => {
            gsap.to(boomerang, {
                y: 100,
                duration: 2,
                ease: "power2.in",
                onUpdate: () => dibujarBoomerang(boomerang.x, boomerang.y)
            });
        }
    });
});
