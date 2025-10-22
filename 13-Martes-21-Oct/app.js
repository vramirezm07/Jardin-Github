console.log("Viernes 12. Resize.");
console.log(THREE);

// Configurar canvas
const canvas = document.getElementById("lienzo");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Escena
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x090028);

// Cámara
const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(0, 0, 50); // cámara alejada mirando al centro (0,0,0)

// Render
const renderer = new THREE.WebGLRenderer({ canvas: canvas });
renderer.setSize(window.innerWidth, window.innerHeight);

// **LUCES**
const ambientLight = new THREE.AmbientLight(0xffffff, 0.5); // luz ambiental
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0xffffff, 1); // luz direccional
directionalLight.position.set(100, 100, 100);
scene.add(directionalLight);



// Crear objetos en círculo
function crearObjetosEnCirculo(cantidad, radio, geometria, material) {
    const objetos = [];
    
    for(let i = 0; i < cantidad; i++) {
        // Calcula la posición en círculo
        const angulo = (i / cantidad) * Math.PI * 2;
        const x = Math.cos(angulo) * radio;
        const y = Math.random() * 10 - 5; // posición Y aleatoria para efecto flotante
        const z = Math.sin(angulo) * radio;
        
        // Crea el objeto
        const sphere = new THREE.Mesh(geometria, material);
        sphere.position.set(x, y, z);
        
        // Guarda referencia para animación
        sphere.userData.velocidadY = Math.random() * 0.02 - 0.01; // velocidad aleatoria
        objetos.push(sphere);
      sphere.add(sphere);
    }
    
    return objetos;
}

const geometry = new THREE.TorusKnotGeometry( 7, 3, 8, 7 ); 
const material = new THREE.MeshPhongMaterial({
   flatShading: true,
   specular: 0xffffff,
   shininess: 100,
   color: "#762cff"
});
// Usando tu geometría existente
const objetosFlotantes = crearObjetosEnCirculo(12, 20, geometry, material01);

// Función de animación
function animate() {
   requestAnimationFrame(animate);

   // Anima los objetos
   objetosFlotantes.forEach(objeto => {
       objeto.position.y += objeto.userData.velocidadY;
       
       // Invierte dirección si llega a límites
       if(objeto.position.y > 5 || objeto.position.y < -5) {
           objeto.userData.velocidadY *= -1;
       }
   });
   
   renderer.render(scene, camera);
}
animate();

// Manejar el resize de la ventana
window.addEventListener('resize', () => {
   // Cambiar color aleatorio
   const newColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
   material.color.set(newColor);

   // Ajustar tamaño del canvas y render
   canvas.width = window.innerWidth;
   canvas.height = window.innerHeight; 
   renderer.setSize(window.innerWidth, window.innerHeight);

   // Actualizar cámara
   camera.aspect = window.innerWidth / window.innerHeight;
   camera.updateProjectionMatrix();
});
