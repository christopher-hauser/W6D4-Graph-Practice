function getNeighbors(row, col, graph) {

  // Check top
  let neighbors = [];
  if (row > 0) {
    if (graph[row - 1][col] === 1) {
      neighbors.push([row - 1, col])
    }
  }
  if (row < graph.length - 1) {
    if (graph[row + 1][col] === 1) {
      neighbors.push([row + 1, col])
    }
  }

  // Check left
  if (col > 0) {
    if (graph[row][col - 1] === 1) {
      neighbors.push([row, col - 1])
    }
  }
  // Check right
  if (col < graph[0].length - 1) {
    if (graph[row][col + 1] === 1) {
      neighbors.push([row, col + 1])
    }
  }
  return neighbors;
}

function islandSize(row, col, graph) {

  // Create a visited set to store visited nodes
  let visited = new Set();
  // Create a stack, put the starting node in the stack
  let thisNode = [row, col];
  let stack = [[row, col]]
  // Put the stringified starting node in visited
  visited.add(thisNode.toString());
  // Initialize size to 0
  let size = 0;
  // While the stack is not empty,
while (stack.length) {
  // Pop the last node
  let node = stack.pop();
  // DO THE THING (increment size by 1)
  size++;
  // Then push all the UNVISITED neighbors on top of the stack
  // and mark them as visited
  let neighbors = getNeighbors(node[0], node[1], graph);
  // neighbors.map(neighbor => neighbor.toString());
  neighbors.forEach((neighbor) => {
    if (!visited.has(neighbor.toString())) {
      stack.push(neighbor);
      visited.add(neighbor.toString());
    }
  })
}
return size;
  // HINT: This is what your helper function `getNeighbors` is for
  // HINT: Remember, you're storing your visited nodes as strings!

  // return size

  // Your code here
}

module.exports = [getNeighbors, islandSize];
