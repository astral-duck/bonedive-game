import { Clock } from 'three';

const clock = new Clock();

export let time = 0;
export let deltaTime = 0;
export const timeUniform = { value: 0 };

export function Start() {
    time = 0;
    deltaTime = 0;
    clock.start();
}

export function Update() {
    deltaTime = clock.getDelta();
    time += deltaTime;
    timeUniform.value = time;
    return deltaTime;
}