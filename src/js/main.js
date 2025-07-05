import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

// scene
const scene = new THREE.Scene();

// canvas
const canvas = document.querySelector('canvas.webgl');

// camera
const camera = new THREE.PerspectiveCamera( 90, window.innerWidth / window.innerHeight, 0.1, 1000 );
camera.position.z = 6;
camera.position.y = 2;
camera.position.x = 3;
camera.rotation.y = 45;
scene.add(camera);

// add my construction model from blender
const loader = new GLTFLoader();
loader.load('models/construction.glb', function (gltf){
  let myMesh = gltf.scene;
  console.log(myMesh);
  // myMesh.traverse((mesh) => {
  //   mesh.material = new THREE.MeshMatcapMaterial();
  // });
  scene.add(myMesh);
}, undefined, function (error) {
  console.error(error);
});

// light
const light = new THREE.AmbientLight(0xffffff);
scene.add(light);
const light2 = new THREE.SpotLight('#EFCB99');
scene.add(light2);
const light3 = new THREE.DirectionalLight(0xffffff);
scene.add(light3);
const light4 = new THREE.HemisphereLight('#ffffff');
scene.add(light4);

// renderer
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
  alpha: true,
  depth: true
});
renderer.setSize( window.innerWidth, window.innerHeight );
// renderer.outputColorSpace = THREE.SRGBColorSpace;
document.body.appendChild( renderer.domElement );

// add controls
const controls = new OrbitControls(camera, renderer.domElement);

function animate() {
  renderer.render( scene, camera );
}
renderer.setAnimationLoop( animate );
