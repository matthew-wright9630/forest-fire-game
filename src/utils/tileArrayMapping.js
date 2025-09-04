export function getAdjacentIndices(index, name, gridSize = 10) {
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

  if (name === "Dead Trees") {
    directions.push([2, 0], [-2, 0], [0, 2], [0, -2]);
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
