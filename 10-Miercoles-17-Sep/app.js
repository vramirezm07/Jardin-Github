console.log ("Ejercicio Árbol.");
console.log(THREE);

const canvas = document.getElementById("lienzo");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Creamos nuestros elementos basicos

const renderer = new THREE.WebGLRenderer({ canvas: canvas });
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x090028); // tu azul pino
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

const materialCopa = new THREE.MeshPhongMaterial({
  flatShading: true,
  specular: "#ffffff",
  shininess: 100,
  color: "#009f40" // verde inicial
});

const madera = new THREE.MeshPhongMaterial(
   {flatShading: true}
);

const textureLoader = new THREE.TextureLoader();
var matcapMaterial;
var matcapMap = textureLoader.load(
   './textura/madera01.jpg',
   function (texture) {
       matcapMaterial = new THREE.MeshPhongMaterial( { map: matcapMap} );
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

const copas = [];
function crearCopa(geo, y) {
  const mesh = new THREE.Mesh(geo, materialCopa);
  mesh.position.set(0, y, -10);
  scene.add(mesh);
  copas.push(mesh); // guardar referencia para cambiar color después
}

crearCopa(geometry01, 2);
crearCopa(geometry02, 1.7);
crearCopa(geometry03, 1.3);
crearCopa(geometry04, 0.9);
crearCopa(geometry05, 0.5);


renderer.render(scene, camera);


function animate() {
   requestAnimationFrame(animate);

   renderer.render(scene, camera);
}
animate();


const topLight = new THREE.PointLight("#2d41c3", 100, 100);
topLight.position.y = 5;
scene.add(topLight);

const frontLight = new THREE.PointLight("#ffffff", 10, 100);
frontLight.position.set(-10,1,3);
scene.add(frontLight);


const ambientLight = new THREE.AmbientLight("#09249b", 0.4); // color cálido, intensidad baja
scene.add(ambientLight);


const boton = document.getElementById("cambiarcolor");
boton.addEventListener("click", () => {

  materialCopa.color.setHex(Math.random() * 0xffffff); // rojo

});
