import northArrow from "../assets/North_Arrow.png";
import northEastArrow from "../assets/North_East_Arrow.png";
import eastArrow from "../assets/East_Arrow.png";
import southEastArrow from "../assets/South_East_Arrow.png";
import southArrow from "../assets/South_Arrow.png";
import southWestArrow from "../assets/South_West_Arrow.png";
import westArrow from "../assets/West_Arrow.png";
import northWestArrow from "../assets/North_West_Arrow.png";

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
      case 1:
        directions.push([-2, 0]);
        if (name === "Dead Tree Fire") {
          directions.push([-3, 0]);
        }
        break;
      case 2:
        directions.push([-2, 2]);
        if (name === "Dead Tree Fire") {
          directions.push([-3, 3]);
        }
        break;
      case 3:
        directions.push([0, 2]);
        if (name === "Dead Tree Fire") {
          directions.push([0, 3]);
        }
        break;
      case 4:
        directions.push([2, 2]);
        if (name === "Dead Tree Fire") {
          directions.push([3, 3]);
        }
        break;
      case 5:
        directions.push([2, 0]);
        if (name === "Dead Tree Fire") {
          directions.push([3, 0]);
        }
        break;
      case 6:
        directions.push([2, -2]);
        if (name === "Dead Tree Fire") {
          directions.push([3, -3]);
        }
        break;
      case 7:
        directions.push([0, -2]);
        if (name === "Dead Tree Fire") {
          directions.push([0, -3]);
        }
        break;
      case 8:
        directions.push([-2, -2]);
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
      return { name: "North", image: northArrow };
    case 2:
      return { name: "North East", image: northEastArrow };
    case 3:
      return { name: "East", image: eastArrow };
    case 4:
      return { name: "South East", image: southEastArrow };
    case 5:
      return { name: "South", image: southArrow };
    case 6:
      return { name: "South West", image: southWestArrow };
    case 7:
      return { name: "West", image: westArrow };
    case 8:
      return { name: "North West", image: northWestArrow };
    default:
      console.log("Error: incorrect direction");
      break;
  }
}
