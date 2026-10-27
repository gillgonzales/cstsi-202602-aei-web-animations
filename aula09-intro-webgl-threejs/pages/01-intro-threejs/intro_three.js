import * as THREE from 'three'

const renderer = new THREE.WebGLRenderer()

const container = document.querySelector('.container3d')
const {width,height} = container.getBoundingClientRect()
console.dir(container.getBoundingClientRect())

renderer.setSize(width, height)
container.appendChild(renderer.domElement)

const scene = new THREE.Scene()
scene.background = new THREE.Color(0x00ff00)

let aspecto = width/height
const camera = new THREE.PerspectiveCamera(
	75, //campo de visao vertical
	aspecto, //aspecto da imagem (Largura/Altura)
	1, //Plano proximo
	200//Plano distante
);
camera.position.z = 25
// camera.rotation.z = 1

const geometry = new THREE.BoxGeometry(40, 40, 40)
const cor = {color:0x0000ff};
const material = new THREE.MeshBasicMaterial(cor)
const cube = new THREE.Mesh(geometry, material)

scene.add(cube)

cube.position.z = -100;
cube.position.x = 0;
cube.position.y = 0;

// cube.rotation.x += .5
// cube.rotation.y += .5
// cube.rotation.z += .5

// renderer.render(scene, camera)


const velRotate = .01;

const animate=()=>{
   //inputs (controls)
	cube.rotation.x += velRotate
	cube.rotation.y += velRotate
	cube.rotation.z += velRotate
	renderer.render(scene, camera)
	// camera.position.z += .5
	requestAnimationFrame(animate)
}

animate()










