// Ratios are given as quantities necessary to produce one unit of output
// Quantities are given as units available

function limitingReagent(ratios, quantities) {
  let maxOutput = Infinity;
  let limiting;

  for (let compound in ratios) {
    if(quantities[compound] === undefined) {
      return 0;
    }
    let maxOutputForGivenCompound = quantities[compound] / ratios[compound]
    if(maxOutputForGivenCompound < maxOutput) {
      maxOutput = maxOutputForGivenCompound;
      limiting = compound;
    }
  }
  console.log(limiting);
  return maxOutput;
}

let ratios = {'C':12, 'H':62, 'O':24, 'N': 1}

let quantities = {'C':5000, 'H':3000, 'O':10000, 'N': 200}

console.log(limitingReagent(ratios, quantities))
