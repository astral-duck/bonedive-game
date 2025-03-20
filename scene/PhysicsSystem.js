import * as CANNON from '../node_modules/cannon-es/dist/cannon-es.js';
import { Vector3 } from 'three';

export class PhysicsSystem {
    constructor() {
        this.world = new CANNON.World();
        this.world.gravity.set(0, -9.82, 0);
        this.world.broadphase = new CANNON.NaiveBroadphase();
        
        // Collision groups
        this.COLLISION_GROUPS = {
            TERRAIN: 1,
            MARINE_LIFE: 2,
            PLAYER: 4,
            BOUNDARY: 8
        };
        
        // Bodies in the simulation
        this.bodies = [];
    }
    
    update(deltaTime) {
        this.world.step(deltaTime);
        
        // Update all bodies
        for (const body of this.bodies) {
            if (body.mesh) {
                body.mesh.position.copy(body.position);
                body.mesh.quaternion.copy(body.quaternion);
            }
        }
    }
    
    createBody(options) {
        const body = new CANNON.Body({
            mass: options.mass,
            position: new CANNON.Vec3().copy(options.position),
            shape: options.shape || new CANNON.Box(new CANNON.Vec3().copy(options.size)),
            collisionFilterGroup: options.collisionGroup,
            collisionFilterMask: options.collidesWith
        });
        
        if (options.velocity) {
            body.velocity.copy(options.velocity);
        }
        
        if (options.enableBuoyancy) {
            body.userData = {
                buoyancyFactor: options.buoyancyFactor || 1.0,
                dragCoefficient: options.dragCoefficient || 0.47
            };
        }
        
        this.world.addBody(body);
        this.bodies.push(body);
        
        return body;
    }
    
    removeBody(body) {
        const index = this.bodies.indexOf(body);
        if (index !== -1) {
            this.bodies.splice(index, 1);
            this.world.removeBody(body);
        }
    }
    
    addStaticEntity(mesh, shape) {
        const body = new CANNON.Body({
            mass: 0, // Static body
            shape: shape
        });
        
        body.position.copy(mesh.position);
        body.quaternion.copy(mesh.quaternion);
        
        this.world.addBody(body);
        this.bodies.push(body);
        
        return body;
    }
}

// Create a singleton instance
export const physics = new PhysicsSystem();