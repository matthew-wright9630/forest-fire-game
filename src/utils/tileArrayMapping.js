import northArrow from "../assets/Compass-Arrow-Solid.png";
import northEastArrow from "../assets/Compass-Arrow-Solid.png";
import eastArrow from "../assets/East_Arrow.png";
import southEastArrow from "../assets/South_East_Arrow.png";
import southArrow from "../assets/South_Arrow.png";
import southWestArrow from "../assets/South_West_Arrow.png";
import westArrow from "../assets/West_Arrow.png";
import northWestArrow from "../assets/North_West_Arrow.png";

import compassArrow from "../assets/Compass-Arrow-Solid.png";

export function getAdjacentIndices(index, name, windDirection, gridSize = 10) {
  const row = Math.floor(index / gridSize);
  const col = index % gridSize;
  const directions = [];
  if (windDirection === 0) {
    directions.push(
      [-1, -1],
      [-1, 0],
      [-1, 1],
      [0, -1],
      [0, 1],
      [1, -1],
      [1, 0],
      [1, 1]
    );
    if (name === "Dead Tree Fire") {
      directions.push([2, 0], [-2, 0], [0, 2], [0, -2]);
    }
  }

  if (windDirection !== 0) {
    switch (windDirection) {
      case 1: // North
        directions.push([-1, 0], [-2, 0], [-1, 1], [-1, -1]);
        if (name === "Dead Tree Fire") {
          directions.push([-3, 0]);
        }
        break;
      case 2: // North-East
        directions.push([-1, 1], [-2, 2], [-1, 0], [0, 1]);
        if (name === "Dead Tree Fire") {
          directions.push([-3, 3]);
        }
        break;
      case 3: // East
        directions.push([0, 1], [0, 2], [-1, 1], [1, 1]);
        if (name === "Dead Tree Fire") {
          directions.push([0, 3]);
        }
        break;
      case 4: // South-East
        directions.push([1, 1], [2, 2], [0, 1], [1, 0]);
        if (name === "Dead Tree Fire") {
          directions.push([3, 3]);
        }
        break;
      case 5: // South
        directions.push([1, 0], [2, 0], [1, 1], [1, -1]);
        if (name === "Dead Tree Fire") {
          directions.push([3, 0]);
        }
        break;
      case 6: // South-West
        directions.push([1, -1], [2, -2], [1, 0], [0, -1]);
        if (name === "Dead Tree Fire") {
          directions.push([3, -3]);
        }
        break;
      case 7: // West
        directions.push([0, -1], [0, -2], [-1, -1], [1, -1]);
        if (name === "Dead Tree Fire") {
          directions.push([0, -3]);
        }
        break;
      case 8: // North-West
        directions.push([-1, -1], [-2, -2], [-1, 0], [0, -1]);
        if (name === "Dead Tree Fire") {
          directions.push([-3, -3]);
        }
        break;
      default:
        console.log("Error: incorrect direction");
        break;
    }
  }

  const neighbors = [];

  for (const [dr, dc] of directions) {
    const newRow = row + dr;
    const newCol = col + dc;

    if (newRow >= 0 && newRow < gridSize && newCol >= 0 && newCol < gridSize) {
      neighbors.push(newRow * gridSize + newCol);
    }
  }

  return neighbors;
}

export function getProtectedTrees(index, gridSize = 10) {
  const row = Math.floor(index / gridSize);
  const col = index % gridSize;

  const directions = [
    [-1, 0],
    [0, -1],
    [0, 1],
    [1, 0],
  ];

  const neighbors = [];

  for (const [dr, dc] of directions) {
    const newRow = row + dr;
    const newCol = col + dc;

    if (newRow >= 0 && newRow < gridSize && newCol >= 0 && newCol < gridSize) {
      neighbors.push(newRow * gridSize + newCol);
    }
  }
  return neighbors;
}

export function determineArrowDirection(wind) {
  switch (wind) {
    case 0:
      return;
    case 1:
      return { name: "North", image: compassArrow, rotation: "0deg" };
    case 2:
      return { name: "North East", image: compassArrow, rotation: "45deg" };
      return { name: "North East", image: northArrow.style(rotate("45deg")) };
    case 3:
      return { name: "East", image: compassArrow, rotation: "90deg" };
      return { name: "East", image: eastArrow };
    case 4:
      return { name: "South East", image: compassArrow, rotation: "135deg" };
      return { name: "South East", image: southEastArrow };
    case 5:
      return { name: "South", image: compassArrow, rotation: "180deg" };
      return { name: "South", image: southArrow };
    case 6:
      return { name: "South West", image: compassArrow, rotation: "225deg" };
      return { name: "South West", image: southWestArrow };
    case 7:
      return { name: "West", image: compassArrow, rotation: "270deg" };
      return { name: "West", image: westArrow };
    case 8:
      return { name: "North West", image: compassArrow, rotation: "315deg" };
      return { name: "North West", image: northWestArrow };
    default:
      console.log("Error: incorrect direction");
      break;
  }
}
