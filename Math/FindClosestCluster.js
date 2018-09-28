
// Given a list of coordinates, return the centroid of the points
// The points are unweighted, but we could have a weighted version
function findCentroid(coordinates) {
  let result = [0, 0];

  coordinates.forEach(coordinate => {
    result[0] += coordinate[0];
    result[1] += coordinate[1];
  })

  result[0] /= coordinates.length;
  result[1] /= coordinates.length;

  return result;
}

// console.log(findCentroid([[1,-1],[3,4], [2,5],[1,2]]))

// This creates all possible combinations of groups of coordinates of a particular size
function createCombinations(coordinates, groupSize) {

  let result = [];
  let combo = [];
  function dfs(depth) {
    if(combo.length === groupSize) {
      result.push(combo.slice());
      return;
    }
    if(depth === coordinates.length) {
      return;
    }
    combo.push(coordinates[depth]);
    dfs(depth + 1);
    combo.pop();
    dfs(depth + 1);
  }
  dfs(0);
  return result;
}


// console.log(createCombinations([[1,-1],[3,4], [2,5],[1,2]], 2))


// Returns an array of objects containing combinations of different points of a certain size;
// their original index in the input combinations array, the center of all the coordinates
// And the sum of all distances from all points in a combo to that center
function findGroupings(coordinates, groupSize) {
  let combinations = createCombinations(coordinates, groupSize);

  let centroids = [];

  combinations.forEach((combo, index) => {
    let center = findCentroid(combo);

    let totalDistance = 0;

    combo.forEach(coordinate => {
      totalDistance += calculateDistance(center, coordinate);
    });

    centroids.push({combo, index, center, totalDistance});
  })
  return centroids;
}

// Finds the distance between two points on a euclidean plane
function calculateDistance(coordinate1, coordinate2) {
  return Math.sqrt(Math.pow((coordinate1[0] - coordinate2[0]), 2) + Math.pow((coordinate1[1] - coordinate2[1]), 2));
}


// Returns the set or coordinates with the smallest total distance between each other
function findClosestGrouping(centroids) {
  centroids.sort((a, b) => {
    return a.totalDistance - b.totalDistance;
  })

  return centroids[0].combo;
}

console.log(findClosestGrouping(findGroupings([[1,-1],[3,4], [2,5],[1,2]], 2)))
