console.log("boomerang");
console.log(gsap);

const canvas = document.getElementById("lienzo");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const boomerang = { x: -500, y: 0, rotation: 0 };

function dibujarBoomerang(x, y, rotation) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Centro del boomerang
    const cx = -180;
    const cy = -220;

    ctx.save();
    ctx.translate(canvas.width / 2 + x, canvas.height / 2 + y);
    ctx.rotate(rotation);

    ctx.beginPath();
    let gradient = ctx.createLinearGradient(-220 - cx, -320 - cy, 50 - cx, 0 - cy);
    gradient.addColorStop(0, "gray");
    gradient.addColorStop(1, "black");
    ctx.fillStyle = gradient;

    ctx.moveTo(-220 - cx, -320 - cy);
    ctx.quadraticCurveTo(0 - cx, -240 - cy, -240 - cx, -120 - cy);
    ctx.quadraticCurveTo(-150 - cx, -180 - cy, -220 - cx, -230 - cy);
    ctx.quadraticCurveTo(-150 - cx, -290 - cy, -220 - cx, -320 - cy);

    ctx.fill();
    ctx.closePath();
    ctx.restore();
}

// Dibujo inicial
dibujarBoomerang(boomerang.x, boomerang.y, boomerang.rotation);

window.addEventListener("mousedown", function() {
    gsap.to(boomerang, {
        x: canvas.width / 2,
        rotation: Math.PI * 4, 
        duration: 2,
        ease: "power2.inOut",
        onUpdate: function() {
            dibujarBoomerang(boomerang.x, boomerang.y, boomerang.rotation);
        },
        onComplete: function() {
            // Regreso a la posición inicial
            gsap.to(boomerang, {
                x: -500,
                rotation: 0,
                duration: 2,
                ease: "power2.inOut",
                onUpdate: function() {
                    dibujarBoomerang(boomerang.x, boomerang.y, boomerang.rotation);
                }
            });
        }
    });

    gsap.to(boomerang, {
        y: canvas.height / 4,
        duration: 2,
        ease: "power2.out",
        onUpdate: function() {
            dibujarBoomerang(boomerang.x, boomerang.y, boomerang.rotation);
        },
        onComplete: function() {
            gsap.to(boomerang, {
                y: canvas.height / 2,
                duration: 2,
                ease: "power2.in",
                onUpdate: function() {
                    dibujarBoomerang(boomerang.x, boomerang.y, boomerang.rotation);
                }
            });
        }, onComplete: function() {
            gsap.to(boomerang, {
                y: 0,
                duration: 2,
                ease: "power2.in",
                onUpdate: function() {
                    dibujarBoomerang(boomerang.x, boomerang.y, boomerang.rotation);
                }
            });
        }
    });
});

