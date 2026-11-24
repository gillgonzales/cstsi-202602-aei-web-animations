import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js';
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader.js';
import { createSkyBox } from './skybox';

let PAUSED = false

const renderer = new THREE.WebGLRenderer({ antialias: true })
renderer.setSize(window.innerWidth, window.innerHeight)
document.body.appendChild(renderer.domElement)

const scene = new THREE.Scene()
scene.background = new THREE.Color(0x000000)

const camera = new THREE.PerspectiveCamera(
  40, window.innerWidth / window.innerHeight, 0.1, 1000
);

camera.position.z = 2

//Resimensionamento da camera ao redimensionar a tela
window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  // console.log(`Resize: ${camera.aspect}`)
  renderer.setSize(window.innerWidth, window.innerHeight);
}, false);

const controls = new OrbitControls(camera, renderer.domElement);
controls.maxDistance = 10

var light = new THREE.AmbientLight(0xffffff, 30);
scene.add(light);

var plight = new THREE.PointLight(0xffffff, 100, 10);
plight.position.set(0, 2, 0);
scene.add(plight);

// const helper = new THREE.PointLightHelper(plight)
// scene.add(helper)

let model
const modelPath = 'models/f15c/'
const mtlFile = 'f15c.mtl'
const objFile = 'f15c.obj'


const manager = new THREE.LoadingManager();
manager.onProgress = (item, loaded, total) => {
  console.log(item, loaded, total);
};

const mtlLoader = new MTLLoader(manager);
const objLoader = new OBJLoader();

//refator async/await
mtlLoader.setPath(modelPath)
const materials = await mtlLoader.loadAsync(mtlFile)
materials.preload()
objLoader.setMaterials(materials)
objLoader.setPath(modelPath)

model = await objLoader.loadAsync(objFile)
model.scale.setScalar(.5)//redimensiona o objeto

const jet = model;
jet.position.y = -.3
const jetJoystick = {x:null,y:null}
scene.add(model)

const hitRadius = .125;
const sphere_geometry = new THREE.SphereGeometry(hitRadius / 2, 12, 12);
const sphere_geometry_enemy = new THREE.SphereGeometry(hitRadius * 10, 12, 12);

const sphereColor = new THREE.MeshStandardMaterial({ color: 0xffff00 });
const sphereColorEnemy = new THREE.MeshStandardMaterial({ color: 0x0000ff });

const sphere = new THREE.Mesh(sphere_geometry, sphereColor);
const sphereEnemy = new THREE.Mesh(sphere_geometry_enemy, sphereColorEnemy);

const hitSphere = new THREE.Sphere(new THREE.Vector3(0, 0, 0), hitRadius)
const hitSphereEnemy = new THREE.Sphere(new THREE.Vector3(0, 0, 0), hitRadius * 10)

jet.shots = new Array()


//enemy
const enemyMtlFile = 'f15c_e.mtl'
const enemyMtlLoader = new MTLLoader(manager);
const enemyObjLoader = new OBJLoader();

//carregamento assincrono com promises
enemyMtlLoader.setPath(modelPath)
enemyObjLoader.setPath(modelPath)

enemyObjLoader.setMaterials(await enemyMtlLoader.loadAsync(enemyMtlFile))
const enemy = await enemyObjLoader.loadAsync(objFile)
enemy.scale.setScalar(.5)//redimensiona o objeto

const limitEnemyXPosition = 5
enemy.position.y = .4

const randomX = Math.random()
enemy.position.x = randomX * (randomX > .5 ? limitEnemyXPosition : -limitEnemyXPosition);
enemy.position.z = -(Math.random() * 100 + 10)

enemy.rotateY(3.14)

const enemiesQtd = 10
const enemies = Array.from({ length: enemiesQtd }).map(()=>enemy.clone())
enemies.forEach(enemy =>{
  let randomX = Math.random()
  enemy.position.x = randomX * (randomX > .5 ? limitEnemyXPosition : -limitEnemyXPosition);
  enemy.position.z = -(Math.random() * 10)
  enemy.hit = hitSphereEnemy.clone()
  enemy.hit.center.copy(...enemy.position)
  enemy.hitModel = sphereEnemy.clone()
  scene.add(enemy)
  scene.add(enemy.hitModel)
})

function moveEnemy(enemy) {
  enemy.position.z += 0.5
  if (enemy.position.z > 100) {
    enemy.position.z = -(Math.random() * 500 + 100)
    enemy.position.x = Math.random() * (Math.random() > .5 ? limitEnemyXPosition : -limitEnemyXPosition);
  }
  enemy.hit.center.copy(...enemy.position)
  enemy.hitModel.position.copy(...enemy.position)
}

let sky = await createSkyBox('bluesky',500)
sky.position.y = 1
console.log('sky created')
console.log(sky)
scene.add(sky)
animate()


function updateJoystick(event) {
  if (event.buttons) {
    jetJoystick.x = null
    jetJoystick.y = null
    return
  }

   jetJoystick.x = event.clientX
   jetJoystick.y = event.clientY
}

function moveJet() {
  if (jet
    && jetJoystick.x
    && jetJoystick.y) {

    let wh = window.innerHeight
    let ww = window.innerWidth

    jet.rotation.x += (jetJoystick.y - wh / 2) / wh / 100

    if (Math.abs(jet.position.x) > 1) {
      jet.position.x = 1 * (jet.position.x / Math.abs(jet.position.x))
    } else {
      jet.rotation.z -= (jetJoystick.x - ww / 2) / ww / 10
    }

    if (Math.abs(jet.rotation.z) != 0) {
      jet.position.x += (jetJoystick.x - ww / 2) / ww / 10
      jet.rotation.y = jet.rotation.z / 2.5
    }

    if (Math.abs(jet.rotation.y) > .5)
      jet.rotation.y = .5 * (jet.rotation.y / Math.abs(jet.rotation.y))
  }
}

function fire() {
  const shot = {
    rx: jet.rotation.z,
    ry: jet.rotation.x,
    model: sphere.clone(),
    hit: hitSphere.clone(),
  }
  shot.hit.radius = hitRadius / 2
  shot.model.material.transparent = true
  shot.model.material.opacity = .5
  shot.model.material.emissive = new THREE.Color(0xffff00)
  shot.model.material.roughness = .5
  shot.model.material.metalness = 1
  shot.model.position.set(...jet.position)
  shot.hit.center.copy(shot.model.position)
  // console.log(shot)
  scene.add(shot.model)
  jet.shots.push(shot)
  console.log(jet.shots.length)
}

function updateShots() {
  if (jet.shots.length > 0) {
    jet.shots.forEach((shot) => {
      shot.model.position.z -= 1
      shot.model.position.x += -shot.rx / 2
      shot.model.position.y += shot.ry / 5
      shot.hit.center.copy(shot.model.position)
    })

    jet.shots = jet.shots.filter((shot) => {
      if (shot.model.position.z < -100) {
        scene.remove(shot.model)
        return false
      }
      return true
    })
  }
}

function shootDown(enemy) {
  if (jet.shots.length == 0) return false;
  return jet.shots.find(shot => shot.hit.intersectsSphere(enemy.hit))
}


function animate() {
  //update inputs
  controls.update();
  !PAUSED && moveJet()

  //update states
  enemies.forEach(e=>{
    !PAUSED && moveEnemy(e)
    if(shootDown(e)){
      console.warn('COLIDIU!!!')
      console.log(e.hit)
    }
  })
   !PAUSED && updateShots()

  //update renders
  renderer.render(scene, camera)

  requestAnimationFrame(animate)
}

window.addEventListener('click',evento=>{
  console.log(evento.clientX)
});


window.addEventListener('mousemove',updateJoystick)
window.addEventListener('keydown',(e)=>{
  console.log(e.code)
  if(e.code==='Space')
    jet.shots.length < 100 && fire()

  if(e.code == "KeyP")
    PAUSED = !PAUSED;
})

