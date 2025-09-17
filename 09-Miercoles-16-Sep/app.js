console.log("Random");
console.log(gsap);




window.addEventListener("mousedown", function(event) {
    
    const mouseX = event.clientX;
    const mouseY = event.clientY;


    let px;
    if (Math.random() < 0.5) {
        px = gsap.utils.random(mouseX - 150, mouseX - gsap.utils.random(50)); 
    } else {
               px = gsap.utils.random(mouseX + 150 , mouseX + Math.random(50)); // segundo elemento como limite en este caso nuestra pantalla
    }

    let py;
    if (Math.random() < 0.5) {
        py = gsap.utils.random(mouseY - 150, mouseY - gsap.utils.random(50)); 
    } else { 
                py = gsap.utils.random(mouseY + 150, mouseY + Math.random(50),); // segundo elemento como limite en este caso nuestra pantalla
    }


    gsap.to(
        ".rectangulo", 
            {
                x: px, 
                y: py,
                duration: 2, //segundos
                ease:"power2.in",
                onComplete: function() {
                    gsap.to(
                        ".rectangulo", 
                        {
                            x: gsap.utils.random(0, window.innerWidth), 
                            y: gsap.utils.random(0, window.innerHeight),
                            duration: 3, //segundos
                            ease:"power2.in"
                        }
                    )
                }
            }
    );
});