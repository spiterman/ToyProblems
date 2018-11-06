// General Solution (UP, DOWN, LEFT, RIGHT)
function ratPath2(maze) {
  let result;
  let path = [];
  function findPath(x, y) {
    if(x >= maze.length || y >= maze[0].length || x < 0 || y < 0 || maze[x][y] === 1) {
      return;
    }
    path.push([x, y]);
    maze[x][y] = 1;

    if(x === maze.length - 1 && y === maze[0].length - 1) {
      if(result === undefined || path.length < result.length) {
        result = path.slice();
      }
    }
    findPath(x - 1, y)
    findPath(x + 1, y)
    findPath(x, y - 1)
    findPath(x, y + 1)
    path.pop();
    maze[x][y] = 0;
  }
  findPath(0, 0);
  return !result ? [-1, -1] : result;
}


let maze2 =[[0, 1, 0, 0, 0],
		        [0, 1, 0, 1, 0],
		        [0, 1, 0, 1, 0],
		        [0, 0, 0, 1, 0]]


console.log(ratPath2(maze2))
/*
[ [ 0, 0 ],
  [ 1, 0 ],
  [ 2, 0 ],
  [ 3, 0 ],
  [ 3, 1 ],
  [ 3, 2 ],
  [ 2, 2 ],
  [ 1, 2 ],
  [ 0, 2 ],
  [ 0, 3 ],
  [ 0, 4 ],
  [ 1, 4 ],
  [ 2, 4 ],
  [ 3, 4 ] ]
  */
