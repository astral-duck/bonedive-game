# BoneDive

A 3D underwater exploration game with realistic marine life simulation, featuring dynamic fish schooling, predator behavior, and physics-based interactions.

## Features

- **Realistic Marine Life Simulation**
  - Dynamic fish schooling behavior using flocking algorithms
  - Predator-prey relationships between sharks and fish
  - Whale movement patterns with surfacing behavior
  - Territory-based behaviors and interactions

- **Advanced Physics System**
  - Realistic buoyancy and fluid dynamics
  - Collision detection and response
  - Environmental interactions

- **Rich Environment**
  - Underwater terrain generation
  - Coral reefs and kelp forests
  - Shipwrecks and other points of interest

## Getting Started

### Prerequisites

- Node.js (latest LTS version recommended)
- A modern web browser with WebGL support

### Installation

1. Clone the repository:
```bash
git clone https://github.com/astral-duck/bonedive-game.git
cd bonedive-game
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
python -m http.server 8000
```

4. Open your browser and navigate to:
```
http://localhost:8000
```

## Technical Details

### Core Systems

- **MarineLifeSystem**: Manages all marine life entities and their behaviors
  - Fish schooling with separation, alignment, and cohesion
  - Shark hunting patterns and territorial behavior
  - Whale movement with periodic surfacing

- **PhysicsSystem**: Handles physical interactions
  - Uses Cannon.js for physics calculations
  - Custom buoyancy implementation
  - Collision detection and response

### Dependencies

- Three.js - 3D graphics
- Cannon.js - Physics engine
- Other dependencies listed in package.json

## Project Structure

```
bonedive-game/
├── assets/
│   ├── environment/    # Terrain and environment models
│   ├── wildlife/      # Marine life models
│   └── items/         # Interactive items and props
├── scene/
│   ├── MarineLifeSystem.js
│   ├── PhysicsSystem.js
│   └── ...
├── scripts/
│   ├── Scene.js
│   ├── Input.js
│   └── ...
└── index.html
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Three.js community for the 3D graphics engine
- Cannon.js team for the physics engine
- Contributors and testers