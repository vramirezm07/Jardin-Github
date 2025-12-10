console.log("Jardín Github ");
console.log(THREE);

const canvas = document.getElementById('webgl-canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Escena y cámara
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 10; // Alejamos la cámara para ver las esferas más grandes

// Renderer
const renderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setClearColor(0x000000);
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.2;

// Luces mejoradas para efecto metálico
const ambientLight = new THREE.AmbientLight(0xffffff, 0.5); 
const pointLight1 = new THREE.PointLight(0xffffff, 2);
pointLight1.position.set(5, 5, 5);

const pointLight2 = new THREE.PointLight(0x00ffff, 1.5);
pointLight2.position.set(-5, -3, 3);

const pointLight3 = new THREE.PointLight(0xff00ff, 1.5);
pointLight3.position.set(0, 5, -3);

scene.add(ambientLight, pointLight1, pointLight2, pointLight3);

// Material ultra metálico
const metalMaterial = new THREE.MeshStandardMaterial({
  color: 0xffffff,
  metalness: 1.0,
  roughness: 0.05,
  envMapIntensity: 1.5
});

// Geometrías - Esferas más grandes
const sphere1 = new THREE.Mesh(new THREE.SphereGeometry(2.5, 64, 64), metalMaterial);
const sphere2 = new THREE.Mesh(new THREE.SphereGeometry(1.5, 64, 64), metalMaterial);
const sphere3 = new THREE.Mesh(new THREE.SphereGeometry(2, 64, 64), metalMaterial);
const sphere4 = new THREE.Mesh(new THREE.SphereGeometry(1.2, 32, 32), metalMaterial);
const sphere5 = new THREE.Mesh(new THREE.SphereGeometry(1.8, 32, 32), metalMaterial);

// Posicionar las esferas con más separación
sphere1.position.set(0, 0, 0);        // Centro
sphere2.position.set(-4, 1, 0);       // Izquierda
sphere3.position.set(4, -0.5, 0);     // Derecha
sphere4.position.set(-2, -3, -2);     // Abajo izquierda
sphere5.position.set(3, 3, -2);       // Arriba derecha

scene.add(sphere1, sphere2, sphere3, sphere4, sphere5);

// Animación
function animate() {
  requestAnimationFrame(animate);
  
  // Rotaciones diferentes para cada esfera
  sphere1.rotation.y += 0.005;
  sphere1.rotation.x += 0.003;
  
  sphere2.rotation.y += 0.008;
  sphere2.rotation.x += 0.005;
  
  sphere3.rotation.y += 0.007;
  sphere3.rotation.x += 0.004;
  
  sphere4.rotation.y += 0.01;
  sphere4.rotation.x += 0.006;
  
  sphere5.rotation.y += 0.009;
  sphere5.rotation.x += 0.007;
  
  // Movimiento sutil de las luces
  pointLight2.position.x = Math.sin(Date.now() * 0.001) * 5;
  pointLight3.position.z = Math.cos(Date.now() * 0.001) * 5;
  
  renderer.render(scene, camera);
}
animate();

// Ajustar en resize
window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});