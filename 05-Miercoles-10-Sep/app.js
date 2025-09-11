console.log("3D lines");
console.log(THREE);

// 1. Obtener referencia del canvas
const canvas = document.getElementById("lienzo");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// 2. Crear escena, cámara y renderer
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
scene.background = new THREE.Color(0x2b2a2a); // tu azul pino
camera.position.z = 300;

const renderer = new THREE.WebGLRenderer({ canvas: canvas });
renderer.setSize(window.innerWidth, window.innerHeight);

// Parámetros de las líneas
const width = canvas.width;
const height = canvas.height;
const distancia = 20;
const margin = 100;
const lines = [];
const numPoints = 100; 

const geometry3 = new THREE.BoxGeometry( 50, 50, 50 ); 
const material3 = new THREE.MeshNormalMaterial(
   {flatShading: true});
const cube2 = new THREE.Mesh( geometry3, material3 ); 
scene.add( cube2 );

const textureLoader = new THREE.TextureLoader();
textureLoader.load(
  './textura/reflejo_verde.png',
  function (texture) {
      matcapMaterial = new THREE.MeshMatcapMaterial({ matcap: texture });
      mesh = new THREE.Mesh(geometry3, matcapMaterial);
      scene.add(mesh);

      // Si quieres que rote, agrégalo al animate:
      function animate() {
          let elapsed = clock.getElapsedTime();
          // ...animación de líneas...

          mesh.rotation.x += 0.01;
          mesh.rotation.y += 0.01;

          renderer.render(scene, camera);
          requestAnimationFrame(animate);
      }
      animate();
  },
  undefined,
  function (error) { console.error("Algo salio mal con la textura,", error); }
);

// 4. Crear líneas horizontales
 for (let y = margin; y <= height - margin; y += distancia) {
      const points = [];
      for (let i = 0; i < numPoints; i++) {
        const x = (i / (numPoints - 1)) * width - width / 2;
        points.push(new THREE.Vector3(x, y - height / 2, 0));
      }

      const geometry = new THREE.BufferGeometry().setFromPoints(points);
      const color = new THREE.Color(`hsl(${Math.random() * 220}, 3%, 60%)`);
      const material = new THREE.LineBasicMaterial({ color: color });
      const line = new THREE.Line(geometry, material);

      // Guarda propiedades para animar
      lines.push({
        mesh: line,
        geometry: geometry,
        baseY: y - height / 2, 
        offset: Math.random() * Math.PI * 2, 
        amplitude: Math.random() * 40 + 20,  
        speed: Math.random() * 0.5 + 0.5 // velocidad en Hz
      });

    scene.add(line);

   const geometry2 = new THREE.BoxGeometry( 1, 1, 1 ); 
  const material2 = new THREE.MeshBasicMaterial( {color: 0x00ff00} ); 
  const cube = new THREE.Mesh( geometry, material); 
  scene.add( cube );
}

const clock = new THREE.Clock();

function animate() {
  
  let elapsed = clock.getElapsedTime(); // segundos desde inicio
    for (let line of lines) {
        const positions = line.geometry.attributes.position.array;
        const desplazamiento =
          Math.sin(elapsed * line.speed + line.offset) * line.amplitude;

        for (let i = 0; i < numPoints; i++) {
          const x = (i / (numPoints - 1)) * width - width / 2;
          positions[i * 3] = x;
          positions[i * 3 + 1] =
            line.baseY +
            desplazamiento +
            Math.sin(elapsed * line.speed + line.offset + i * 0.2) *
              line.amplitude;
        }

        line.geometry.attributes.position.needsUpdate = true;
        line.geometry.computeBoundingSphere(); // evita NaN
      }

    cube2.rotation.x += 0.01;
    cube2.rotation.y += 0.01;


    renderer.render(scene, camera);
    requestAnimationFrame(animate);
}
animate();