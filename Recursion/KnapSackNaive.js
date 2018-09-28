function knapSackNaive(values, weights, capacity) {
  let maxValue = 0;

  function addItem(currentValue, currentWeight, index){
    if(currentWeight > capacity || index > weights.length) {
      return;
    }
    if(currentValue > maxValue){
      maxValue = currentValue;
    }

    addItem(currentValue + values[index], currentWeight + weights[index], index + 1);
    addItem(currentValue, currentWeight, index + 1);
  }

  addItem(0, 0, 0);


  return maxValue;
}

console.log(knapSackNaive([6, 10, 12], [1, 2, 3], 5))
