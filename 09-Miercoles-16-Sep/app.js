console.log("Random");
console.log(gsap);




window.addEventListener("mousedown", function(event) {
    
    const mouseX = event.clientX;
    const mouseY = event.clientY;

    gsap.to(
        ".rectangulo", 
            {
                x: gsap.utils.random(mouseX, window.innerWidth), 
                y: gsap.utils.random(mouseY, window.innerHeight),
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