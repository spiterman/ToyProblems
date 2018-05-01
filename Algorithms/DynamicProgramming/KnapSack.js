// K = capacity
// N = values/weights.length

function KnapSack(values, weights, capacity) {
  let finalMax = new Array(capacity + 1).fill(0); //O(K) Space and Time to Create

  for(let index = 0; index < weights.length; index++ ) { //O(N) Time
    let weight = weights[index];
    let value = values[index];
    let tempMax = finalMax.slice(); //O(K) Time and Space

    for(let i = 0; i <= capacity; i++){ //O(K) Time

      if(i - weight >= 0) {
        tempMax[i] = Math.max(tempMax[i], (finalMax[i - weight] + value))
      }
    }
    finalMax = tempMax;

  }

  return finalMax[capacity];
}



console.log(KnapSack([6, 10, 12], [1, 2, 3], 5))


// => 22
