import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

// scene
const scene = new THREE.Scene();

// canvas
const canvas = document.querySelector('canvas.webgl');

// camera
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
camera.position.z = 5;
scene.add(camera)

// object
const geometry = new THREE.BoxGeometry( 1, 1, 1 );
const material = new THREE.MeshBasicMaterial( { color: '#000000' } );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );

// light
const light = new THREE.AmbientLight(0xffffff);
scene.add(light);

// renderer
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
  alpha: true
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
