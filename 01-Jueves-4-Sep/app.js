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
//Cámara
//const camera = new THREE.Camera(fov, SVGPreserveAspectRatio, NodeIterator,far);
const camera = new THREE.PerspectiveCamera(45, window.innerWidth/window.innerHeight, 0.1, 1000);
//Mesh 

//Geometría
const geometry = new THREE.TorusKnotGeometry();

// Material
const material = new THREE.MeshToonMaterial(
   {flatShading: true, specular: "#ffffffff", shininess: 100, color: "#ffa72c"}
);

const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);
//Posición del mesh
mesh.position.z = -5;
mesh.rotation.x = 45;

//Render {}-> objeto, llamar al constructor en este caso canvas
const renderer = new THREE.WebGLRenderer({canvas: canvas});

//Dar instrucciones de renderizado
renderer.render(scene, camera);


function animate() {
   requestAnimationFrame(animate);

   mesh.rotation.x += 0.01;
   mesh.rotation.y += 0.01;

   renderer.render(scene, camera);
}
animate();

const topLight = new THREE.PointLight("#ef9619ff", 100, 100);
topLight.position.y = 5;
scene.add(topLight);

const frontLight = new THREE.PointLight("#e60c0c", 10, 100);
frontLight.position.set(3,1,3);
scene.add(frontLight);



