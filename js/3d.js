/* Importing Three Js library */
import * as THREE from 'https://cdn.skypack.dev/three@0.133.1';
import {GLTFLoader} from 'https://cdn.skypack.dev/three@0.133.1/examples/jsm/loaders/GLTFLoader.js';
import {OrbitControls} from 'https://cdn.skypack.dev/three@0.133.1/examples/jsm/controls/OrbitControls.js';

const container = document.querySelector('.scene');

const scene = new THREE.Scene();

//  camera
const camera = new THREE.PerspectiveCamera(18, container.clientWidth / container.clientHeight, 0.1, 1000);
camera.position.set(0, 0, 2);

// renderer
const renderer = new THREE.WebGLRenderer({
   alpha: true,
   antialias: true
});
renderer.setSize(container.clientWidth, container.clientHeight);
renderer.setPixelRatio(window.devicePixelRatio);
container.appendChild(renderer.domElement);

// OrbitControls
const controls = new OrbitControls(camera, renderer.domElement);
controls.rotateSpeed = 0.09;
controls.enableZoom = false;
controls.enablePan = false;

container.addEventListener("mouseup", function () {
   controls.reset();
});

// GLTFLoader
const loader = new GLTFLoader();
loader.load("res/scene.glb", function (gltf) {
   scene.add(gltf.scene);
});

// Lights

const light = new THREE.AmbientLight( 0x222222, 2.5 ); // soft white light
scene.add( light );

const spotLight = new THREE.SpotLight( 0xffffff );
spotLight.position.set( 0.788, 1.547, 6.26 );
spotLight.castShadow = false;
scene.add( spotLight );

function animate() {
   requestAnimationFrame(animate);
   renderer.render(scene, camera);
}

animate();
