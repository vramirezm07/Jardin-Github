console.log("boomerang");
console.log(gsap);


const canvas = document.getElementById("lienzo");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Boomerang animable
const boomerang = { x: -600, y: 0 }; // y relativo al centro

function dibujarBoomerang(x, y) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.beginPath();
    let gradient = ctx.createLinearGradient(
        canvas.width/2 - 400 + x, canvas.height/2 + y,
        canvas.width/2 + 50 + x, canvas.height/2 + y
    );
    gradient.addColorStop(0, "gray");
    gradient.addColorStop(1, "black");
    ctx.fillStyle = gradient;

    const centerY = canvas.height / 2; // centro vertical
    ctx.moveTo(canvas.width/2 - 220 + x, centerY - 320 + y);
    ctx.quadraticCurveTo(
        canvas.width/2 + x, centerY - 240 + y,
        canvas.width/2 - 240 + x, centerY - 120 + y
    );
    ctx.quadraticCurveTo(
        canvas.width/2 - 150 + x, centerY - 180 + y,
        canvas.width/2 - 220 + x, centerY - 230 + y
    );
    ctx.quadraticCurveTo(
        canvas.width/2 - 150 + x, centerY - 290 + y,
        canvas.width/2 - 220 + x, centerY - 320 + y
    );

    ctx.fill();
    ctx.closePath();
}

// Dibujo inicial
dibujarBoomerang(boomerang.x, boomerang.y);

window.addEventListener("mousedown", function() {
    // Animar horizontal (x)
    gsap.to(boomerang, {
        x: canvas.width,
        duration: 4,
        ease: "power2.inOut",
        onUpdate: () => dibujarBoomerang(boomerang.x, boomerang.y)
    });

    // Animar vertical (y) sube y baja
    gsap.to(boomerang, {
        y: -canvas.height / 4, // sube relativo al centro
        duration: 2,
        ease: "power2.out",
        onUpdate: () => dibujarBoomerang(boomerang.x, boomerang.y),
        onComplete: () => {
            gsap.to(boomerang, {
                y: 0, // vuelve al centro
                duration: 2,
                ease: "power2.in",
                onUpdate: () => dibujarBoomerang(boomerang.x, boomerang.y)
            });
        }
    });
});
