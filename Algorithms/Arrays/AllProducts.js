function findAllProducts(arr) {
  let forwardMultiples = [];
  let backwardMultiples = [];

  let total = 1;
  for(let i = 0; i < arr.length; i++) {
    forwardMultiples.push(total); //O(N)
    total *= arr[i];
  }

  total = 1;

  for(let i = arr.length - 1; i >= 0; i--) {
    backwardMultiples.push(total); //O(N)
    total *= arr[i];
  }

  backwardMultiples.reverse() //O(N)

  let result = [];

  for(let i = 0; i < arr.length; i++) {
    result.push(forwardMultiples[i] * backwardMultiples[i]);
  }

  return result;

}

findAllProducts([1, 2, 3, 4, 5])
