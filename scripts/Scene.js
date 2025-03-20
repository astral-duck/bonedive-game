import { Scene, PerspectiveCamera, WebGLRenderer, AmbientLight, DirectionalLight } from 'three';
import { marineLife } from '../scene/MarineLifeSystem.js';
import { physics } from '../scene/PhysicsSystem.js';
import * as Time from './Time.js';

// Create scene
export const scene = new Scene();

// Create camera
const camera = new PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(0, 10, 30);

// Create renderer
const renderer = new WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Add lights
const ambientLight = new AmbientLight(0x404040);
scene.add(ambientLight);

const directionalLight = new DirectionalLight(0xffffff, 1);
directionalLight.position.set(1, 1, 1);
scene.add(directionalLight);

// Initialize systems
await marineLife.initialize();

// Animation loop
function animate() {
    requestAnimationFrame(animate);
    
    const deltaTime = Time.update();
    
    physics.update(deltaTime);
    marineLife.update(deltaTime);
    
    renderer.render(scene, camera);
}

animate();