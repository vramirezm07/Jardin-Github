console.log ("Viernes 04. Ejercicio Árbol.");
console.log(THREE);


//configurar canvas
const canvas = document.getElementById("lienzo");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Creamos nuestros elementos basicos
// Escena, cámara, mesh y render

//Escena
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x090028); // tu azul pino
//Cámara
//const camera = new THREE.Camera(fov, SVGPreserveAspectRatio, NodeIterator,far);
const camera = new THREE.PerspectiveCamera(45, window.innerWidth/window.innerHeight, 0.1, 1000);
//Mesh 

//Geometría                             /radio, altura, 32 segmentos
const geometry01 = new THREE.ConeGeometry(1, 1, 32);
const geometry02 = new THREE.ConeGeometry(1.3, 1.5, 32);
const geometry03 = new THREE.ConeGeometry(1.5, 1.7, 32);
const geometry04 = new THREE.ConeGeometry(1.7, 1.9, 32);
const geometry05 = new THREE.ConeGeometry(2, 2.2, 32);

//nCylinderGeometry(radiusTop, radiusBottom, height, radialSegments);
const geometry06 = new THREE.CylinderGeometry(0.5, 0.7, 1, 32);

// Material
const material = new THREE.MeshPhongMaterial(
   {flatShading: true, specular: "#ffffff", shininess: 100, color: "#009f40"}
);

const madera = new THREE.MeshPhongMaterial(
   {flatShading: true}
);

const textureLoader = new THREE.TextureLoader();
var matcapMaterial;
var matcapMap = textureLoader.load(
   // Textura URL
   './textura/madera01.jpg',
   // on Load callback
   function (texture) {
       matcapMaterial = new THREE.MeshPhongMaterial( { map: matcapMap} );
       // Mesh.
       const mesh6 = new THREE.Mesh(geometry06, matcapMaterial);
        scene.add(mesh6);
        mesh6.position.z = -10;
        mesh6.position.y = -1;
       
       // 4. Activar animación.
       animate();
   },
   // on Progress (no funciona por ahora)
   undefined,
   // on Error callback
   function (error) { console.error("Algo salio mal con la textura,", error); }
);


const mesh = new THREE.Mesh(geometry01, material);
scene.add(mesh);
//Posición del mesh
mesh.position.z = -10;
mesh.position.y = 2;

const mesh2 = new THREE.Mesh(geometry02, material);
scene.add(mesh2);
mesh2.position.z = -10;
mesh2.position.y = 1.7;

const mesh3 = new THREE.Mesh(geometry03, material);
scene.add(mesh3);
mesh3.position.z = -10;
mesh3.position.y = 1.3;

const mesh4 = new THREE.Mesh(geometry04, material);
scene.add(mesh4);
mesh4.position.z = -10;
mesh4.position.y = 0.9;

const mesh5 = new THREE.Mesh(geometry05, material);
scene.add(mesh5);
mesh5.position.z = -10;
mesh5.position.y = 0.5;



//Render {}-> objeto, llamar al constructor en este caso canvas
const renderer = new THREE.WebGLRenderer({canvas: canvas});

//Dar instrucciones de renderizado
renderer.render(scene, camera);


function animate() {
   requestAnimationFrame(animate);

   renderer.render(scene, camera);
}
animate();


const topLight = new THREE.PointLight("#0a1fa5ff", 100, 100);
topLight.position.y = 5;
scene.add(topLight);

const frontLight = new THREE.PointLight("#ffffffff", 10, 100);
frontLight.position.set(-10,1,3);
scene.add(frontLight);

// Luz ambiental cálida y suave
const ambientLight = new THREE.AmbientLight("#09249b", 0.4); // color cálido, intensidad baja
scene.add(ambientLight);


