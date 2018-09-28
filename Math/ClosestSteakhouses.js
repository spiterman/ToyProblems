function closestSteakhouses(coordinates, numberOfHouses) {
  let distances = [];

  coordinates.forEach((coordinate, index) => {
    distances.push({coordinate, index, distance: calculateDistance(coordinate)})
  })

  distances.sort((a, b) => {
    return a.distance - b.distance;
  })

  let result = [];

  for(let i = 0; i < Math.min(numberOfHouses, coordinates.length); i++) {
    result.push(distances[i].coordinate);
  }

  return result;
}

function calculateDistance(coordinate) {
  return Math.sqrt(Math.pow(coordinate[0], 2) + Math.pow(coordinate[1], 2));
}

closestSteakhouses([[1,-1],[3,4], [2,5],[1,2]], 2)
