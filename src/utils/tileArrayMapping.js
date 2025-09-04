export function getAdjacentIndices(index, name, windDirection, gridSize = 10) {
  const row = Math.floor(index / gridSize);
  const col = index % gridSize;

  const directions = [
    [-1, -1],
    [-1, 0],
    [-1, 1],
    [0, -1],
    [0, 1],
    [1, -1],
    [1, 0],
    [1, 1],
  ];

  if (name === "Dead Tree Fire") {
    directions.push([2, 0], [-2, 0], [0, 2], [0, -2]);
  }

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
