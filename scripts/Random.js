import { MathUtils } from 'three';

export class Random {
    constructor(seed = Math.random()) {
        this.seed = seed;
        this.state = seed * 16807 % 2147483647;
    }
    
    Next() {
        this.state = this.state * 16807 % 2147483647;
        return (this.state - 1) / 2147483646;
    }
    
    Generate(x) {
        return MathUtils.lerp(-1, 1, this.Next());
    }
    
    Generate2D(x, y) {
        return this.Generate(x + y * 57);
    }
    
    Perlin(x, y) {
        const X = Math.floor(x) & 255;
        const Y = Math.floor(y) & 255;
        
        x -= Math.floor(x);
        y -= Math.floor(y);
        
        const u = this.Fade(x);
        const v = this.Fade(y);
        
        const A = this.Generate2D(X, Y);
        const B = this.Generate2D(X + 1, Y);
        const C = this.Generate2D(X, Y + 1);
        const D = this.Generate2D(X + 1, Y + 1);
        
        return MathUtils.lerp(
            MathUtils.lerp(A, B, u),
            MathUtils.lerp(C, D, u),
            v
        );
    }
    
    Ridge(x, y, p) {
        return Math.pow(Math.abs(this.Perlin(x, y)), p);
    }
    
    Fade(t) {
        return t * t * t * (t * (t * 6 - 15) + 10);
    }
}