import { AmbientLight, LoadingManager, PerspectiveCamera, PointLight, PointLightHelper, Scene, TextureLoader, WebGLRenderer} from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
// import { FlyControls } from 'three/examples/jsm/controls/FlyControls';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js';
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader.js';
import skyImg from "/img/sky.png?url"

const renderer = new WebGLRenderer({ antialias: true, alpha: true })
renderer.setSize(window.innerWidth, window.innerHeight)
document.body.appendChild(renderer.domElement)

const scene = new Scene()

let aspecto = window.innerWidth / window.innerHeight
const camera = new PerspectiveCamera(
  75, //campo de visao vertical
  aspecto, //aspecto da imagem (Largura/Altura)
  0.1, //Plano proximo
  100//Plano distante
);

camera.position.z = 3

const controls = new OrbitControls(camera, renderer.domElement);
// const controls = new FlyControls(camera, renderer.domElement);
// controls.movementSpeed = 1000;
// controls.domElement = renderer.domElement;
// controls.rollSpeed = Math.PI / 24;
// controls.autoForward = false;
// controls.dragToLook = false;

// const timer = new Timer();

// timer.connect( document );

//Luz
const light = new AmbientLight(0xffffff, 10);
scene.add(light);

//Ponto de Luz
const plight = new PointLight(0xffffff, 10);
plight.position.set(0, 5, 0);
scene.add(plight);


const helper = new PointLightHelper(plight)
// scene.add(helper)

const modelPath = 'models/f15c/'
const mtlFile = 'f15c.mtl'
const objFile = 'f15c.obj'

const manager = new LoadingManager();
manager.onProgress = function (item, loaded, total) {
  console.log(item, loaded, total);
};

const textureLoader = new TextureLoader()
const mtlLoader = new MTLLoader(manager);
const objLoader = new OBJLoader();

// mtlLoader.setPath(modelPath)
//   .load(mtlFile, (materials) => {
//     materials.preload()
//     objLoader.setMaterials(materials)
//     objLoader.setPath(modelPath)
//       .load(objFile, (object) => {
//         object.rotation.x = 0
//         object.rotation.y = 1.5
//         scene.add(object)
//         animate()
//       })
//   })

const skyTexture = await textureLoader.loadAsync(skyImg)
scene.background = skyTexture

const material = await mtlLoader.setPath(modelPath).loadAsync(mtlFile)
material.preload(material)
objLoader.setMaterials(material)
let object = {}
objLoader.setPath(modelPath)
  .loadAsync(objFile)
  .then((obj) => {
    obj.rotation.x = 0
    obj.rotation.y = 1.5
    object = obj
    scene.add(obj)
    animate()
  })
// debugger
// object.rotation.x = 0
// object.rotation.y = 1.5
// scene.add(object)

function animate() {
  // timer.update();
  // controls.update();//Para manipulações da camera
  // camera.position.z+=.01;
  // object.rotation.x+=0.1;
  // controls.update(timer.getDelta());
  renderer.render(scene, camera);
  requestAnimationFrame(animate);
}
