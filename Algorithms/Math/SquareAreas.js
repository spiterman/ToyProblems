function squareAreas(area) {
  let result = [];

  while(area > 0) {
    let square = Math.floor(Math.sqrt(area));
    area -= square * square;
    result.push(square * square);
  }
  return result;
}

console.log(squareAreas(194));
