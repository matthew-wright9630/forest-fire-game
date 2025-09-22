# Forest Fire Game

A React-based simulation game built with Vite, where fire spreads across a grid-based forest. Wind, River, and firefighters introduce variables and can change the spread of fires.

## Table of Contents

- [Demo](#demo)
- [Features](#features)
- [Setup](#setup)
- [Usage](#usage)
- [Game Rules](#game-rules)
- [Project Structure](#project-structure)
- [Attribution](#attribution)
- [License](#license)

## Demo

## Features

- 10×10 tile-based board with various elements: trees, dead trees, water, houses, wind effects, and fire.
- Firefighters can be placed to help slow and/or contain the fire.
- Directional wind arrow affects fire propagation.
- Game controls for starting, updating, progressing rounds (“Next”), and ending scenarios.

## Setup

There are 2 ways of visiting the app.
Option 1: visit https://matthew-wright9630.github.io/forest-fire-game/
Option 2:

1. Clone the repository:
   ```bash
   git clone https://github.com/matthew-wright9630/forest-fire-game.git
   cd forest-fire-game
   ```
2. npm install
3. npm run dev
4. visit the app at: http://localhost:3001

## Usage

- Start button: Initializes the board with random tiles and wind direction (if enabled).
- Update Board Conditions: Opens a modal to configure game elements. Error validation is configured to force 100 elements to be in play.
- Next: Advances the game by one round, spreading fire and updating states.
  - Note: if firefighters are enabled, they will need to be placed before the "Next button is enabled".
- End: Resets the game to initial state.

## Game Rules

- Fire spreads to adjacent (including diagonal) tiles unless blocked by Water, Fire Fighters, or Protected Trees.
- Fire that is on a dead tree will expand in 1 tile diagonally, and 2 tiles in the orthogonal directions.
- Fire Fighters can be placed by clicking on valid tiles; they block fire in their tile and four orthogonal neighbors.
- Wind will increase the speed of spread by 1 in one of the orthodiagonal directions.
- When the house is enabled, it should be protected. Once it is burning, the game is over.

## Project Structure

├── public/
├── src/
│ ├── components/
│ │ ├── Board.jsx
│ │ ├── BoardTile.jsx
│ │ ├── UpdateGameModal.jsx
│ │ └── ... (other boards)
│ ├── utils/
│ │ └── tileArrayMapping.js
│ ├── assets/
│ │ └── images & icons
│ ├── App.jsx
│ └── main.jsx
├── README.md
├── package.json
└── vite.config.js

- Board.jsx: The core game logic, rendering, and control flow.
- UpdateGameModal.jsx: Modal for adjusting game settings.
- tileArrayMapping.js: Utility functions (e.g., adjacency calculations, protection logic).
- BoardTile.jsx: Individual tile presentation.

## Attribution

- This project’s game mechanics and concept were inspired by the [Outreach GI curricula at the University of Alaska](https://outreach.gi.alaska.edu/curricula?field_project_target_id=148&grade=All&field_discipline_target_id=All).
