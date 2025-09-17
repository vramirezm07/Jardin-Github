console.log("Random");

console.log(gsap);
const canvas = document.getElementById("lienzo");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;



window.addEventListener("mousedown", function() {
    gsap.to(
        ".rectangulo", 
            {
                x:500,
                y:300,
                duration: 5, //segundos
                ease:"bounce.inOut",
                onComplete: function() {
                    gsap.to(
                        ".rectangulo", 
                        {
                            x:0,
                            y:100,
                            duration: 5, //segundos
                            ease:"bounce.inOut"
                        }
                    )
                }
            }
    );
});