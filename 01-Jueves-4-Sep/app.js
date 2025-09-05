console.log ("Sesion 05. Ejercicio 01: Geometrias.");
console.log(THREE);


//configurar canvas
const canvas = document.getElementById("lienzo");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Creamos nuestros elementos basicos
// Escena, cámara, mesh y render

//Escena
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x96afdB); // Usa el mismo azul que tu CSS (rgba(80, 135, 231, 1))
//Cámara
//const camera = new THREE.Camera(fov, SVGPreserveAspectRatio, NodeIterator,far);
const camera = new THREE.PerspectiveCamera(45, window.innerWidth/window.innerHeight, 0.1, 1000);
//Mesh 

//Geometría
const geometry = new THREE.SphereGeometry();

// Material
const material = new THREE.MeshLambertMaterial(
   {flatShading: true, specular: "#ffffff", shininess: 100, color: "#ffa72c"}
);



const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);
//Posición del mesh
mesh.position.z = -7.5;


//Render {}-> objeto, llamar al constructor en este caso canvas
const renderer = new THREE.WebGLRenderer({canvas: canvas});

//Dar instrucciones de renderizado
renderer.render(scene, camera);

//movimiento con X
window.addEventListener("mousedown", function() {
    // Movimiento en X (de -5 a 5 y regresa)
    gsap.to(mesh.position, {
        x: 5,
        duration: 8,
        ease: "power2.inOut",
        onComplete: function() {
            gsap.to(mesh.position, {
                x: -5,
                duration: 3,
                ease: "sine.out"
            });
        }
    });

    // Movimiento en Y (sube y baja)
    gsap.to(mesh.position, {
        y: 2,
        duration: 4,
        ease: "power2.out",
        onComplete: function() {
            gsap.to(mesh.position, {
                y: 0,
                duration: 4,
                ease: "power2.in",
                onComplete: function() {
                    gsap.to(mesh.position, {
                        y: 0,
                        duration: 1,
                        ease: "power1.inOut"
                    });
                }
            });
        }
    });
    // Opcional: inicia desde el extremo izquierdo y centro
    mesh.position.x = -5;
    mesh.position.y = 0;
});


function animate() {
   requestAnimationFrame(animate);

   mesh.rotation.y += 0.01;

   renderer.render(scene, camera);
}
animate();

const topLight = new THREE.PointLight("#ffbb66", 100, 100); // luz cálida
topLight.position.y = 5;
scene.add(topLight);

const frontLight = new THREE.PointLight("#ffd580", 10, 100); // luz cálida secundaria
frontLight.position.set(3, 1, 3);
scene.add(frontLight);

// Luz ambiental cálida y suave
const ambientLight = new THREE.AmbientLight("#ffe0b2", 0.4); // color cálido, intensidad baja
scene.add(ambientLight);



