// JavaScript Solution:
// DOWN, RIGHT solution
function ratPath(maze) {
  let result;
  let path = [];
  function findPath(x, y) {
    if(x >= maze.length || y >= maze[0].length || maze[x][y] === 1) {
      return;
    }
    path.push([x, y]);
    if(x === maze.length - 1 && y === maze[0].length - 1) {
      result = path.slice();
      return;
    }
    findPath(x + 1, y)
    findPath(x, y + 1)
    path.pop();
  }
  findPath(0, 0);
  return !result ? [-1, -1] : result;
}


let maze = [[0, 0, 0, 1],
		        [0, 1, 0, 1],
		        [0, 1, 0, 0],
		        [0, 0, 1, 0]]


console.log(ratPath(maze))
/*
[ [ 0, 0 ],
  [ 0, 1 ],
  [ 0, 2 ],
  [ 1, 2 ],
  [ 2, 2 ],
  [ 2, 3 ],
  [ 3, 3 ] ]
*/
