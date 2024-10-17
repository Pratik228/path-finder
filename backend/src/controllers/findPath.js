const findPath = (grid, start, end) => {
  const queue = [[start]];
  const visited = new Set([`${start[0]},${start[1]}`]);
  const dir = [
    [0, 1],
    [1, 1],
    [1, 0],
    [1, -1],
    [0, -1],
    [-1, -1],
    [-1, 0],
    [-1, 1],
  ];

  while (queue.length > 0) {
    const path = queue.shift();
    const [x, y] = path[path.length - 1];
    if (x === end[0] && y === end[1]) {
      return path;
    }

    for (const [dx, dy] of dir) {
      const newX = x + dx;
      const newY = y + dy;
      const newKey = `${newX},${newY}`;

      if (
        newX >= 0 &&
        newX < 20 &&
        newY >= 0 &&
        newY < 20 &&
        !visited.has(newKey)
      ) {
        visited.add(newKey);
        queue.push([...path, [newX, newY]]);
      }
    }
  }
  return null;
};

module.exports = findPath;

//this won't work to find shortest path, but yeah path can be easily found using this, DFS can take lots of time so to optimize
// we will be using BFS insted, this below one is for DFS

////////////////////////////////////////////////////////////////
// function findPath(grid, start, end, path = [], visited = new Set(),) {
//   const [x, y] = start;
//   const key = `${x},${y}`;

//   if (x < 0 || x >= 20 || y < 0 || y >= 20 || visited.has(key)) {
//     return null;
//   }
//   path.push(start);
//   visited.add(key);

//   if (x === end[0] && y === end[1]) {
//     return path;
//   }
//   const dir = [
//     [0, 1],
//     [1, 1],
//     [1, 0],
//     [1, -1],
//     [0, -1],
//     [-1, -1],
//     [-1, 0],
//     [-1, 1],
//   ];

//   for (let [dx, dy] of dir) {
//     const newPath = findPath(
//       grid,
//       [x + dx, y + dy],
//       end,
//       [...path],
//       new Set(visited)
//     );
//     if (newPath) {
//       return newPath;
//     }
//   }
//   return null;
// }
