import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js';
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader.js';

const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
renderer.setSize(window.innerWidth, window.innerHeight)
document.body.appendChild(renderer.domElement)

const scene = new THREE.Scene()
const raycaster = new THREE.Raycaster();
const pointer = new THREE.Vector2();

let aspecto = window.innerWidth / window.innerHeight
const camera = new THREE.PerspectiveCamera(
  75, //campo de visao vertical
  aspecto, //aspecto da imagem (Largura/Altura)
  0.1, //Plano proximo
  100//Plano distante
);

camera.position.z = 1.2
const controls = new OrbitControls(camera, renderer.domElement);

//Luz
const light = new THREE.AmbientLight(0xffffff, 15);
scene.add(light);

//Ponto de Luz
const plight = new THREE.PointLight(0xffffff, 1);
plight.position.set(10, 10, 0);
scene.add(plight);

const modelPath = 'models/f15c/'
const mtlFile = 'f15c.mtl'
const objFile = 'f15c.obj'

const manager = new THREE.LoadingManager();
manager.onProgress = function (item, loaded, total) {
  console.log(item, loaded, total);
};

const mtlLoader = new MTLLoader(manager);
const objLoader = new OBJLoader();
let intersects = [];
let jetObjectParts = [];
let jetObjectParts2 = [];

// mtlLoader.setPath(modelPath)
//   .load(mtlFile, (materials) => {
//     objLoader.setMaterials(materials)
//     objLoader.setPath(modelPath)
//       .load(objFile, (object) => {
//         object.rotation.x = 0
//         object.rotation.y = 1.5
//         scene.add(object)
//         object.traverse(obj => {
//           obj?.material?.color &&
//            originalColors.push({
//               id: obj.id, 
//              uuid: obj.uuid, 
//              color: obj.material.color.clone() 
//             })
//         })
//         renderer.render(scene, camera)
//         animate()
//       })
//   })


mtlLoader.setPath(modelPath)
const material = await mtlLoader.loadAsync(mtlFile)
material.preload(material)
objLoader.setMaterials(material)

objLoader.setPath(modelPath)
const jet = await objLoader.loadAsync(objFile)
jet.rotation.x = 0
jet.rotation.y = 1.5
scene.add(jet)

const jet2 = jet.clone()
jet2.position.z = -5
jet2.position.y = 4
scene.add(jet2)

jet.traverse(obj => {
  obj?.material?.color &&
    jetObjectParts.push({
      id: obj.id,
      uuid: obj.uuid,
      color: obj.material.color.clone()
    })
})

jet2.traverse(obj => {
  obj?.material?.color &&
    jetObjectParts2.push({
      id: obj.id,
      uuid: obj.uuid,
      color: obj.material.color.clone()
    })
})

animate()


function animate() {
  controls.update();
  raycaster.setFromCamera(pointer, camera);
  renderer.render(scene, camera);
  requestAnimationFrame(animate);
}

function detectIntersections() {
  intersects = raycaster.intersectObjects(scene.children);

  console.log(intersects)
  if (intersects.length) {
    const [intersectedObj] = intersects;
    console.log(intersectedObj)
    const { object } = intersectedObj;
    console.log(object)
    if (object)
      if(jetObjectParts.find(obj => obj.uuid === object.uuid))
        jet.rotation.x += .1
      if(jetObjectParts2.find(obj => obj.uuid === object.uuid))
        jet2.rotation.x += .1
  }

  // intersects.forEach(intersected => {
  //   // intersected.object.material.color.set(0x0000ff);

  //   let object = originalColors.find(obj => obj.uuid === intersected.object.uuid)
  //   if (object) {
  //     console.log(object)
  //     setTimeout(() => {
  //       intersected.object.material.color = object.color.clone()
  //     }, 500)
  //   }
  // })

}

function onPointerMove(event) {
  // https://threejs.org/docs/index.html?q=Raycas#api/en/core/Raycaster
  // calculate pointer position in normalized device coordinates
  // (-1 to +1) for both components

  pointer.x = (event.clientX / window.innerWidth) * 2 - 1;
  pointer.y = - (event.clientY / window.innerHeight) * 2 + 1;

}

window.addEventListener('pointermove', onPointerMove);
window.addEventListener('click', detectIntersections);