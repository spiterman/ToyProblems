function anagramGroups(arr) {
  let dict = {};
  for(let i = 0; i < arr.length; i++ ){
    let key = arr[i].split('').sort().join('');
    dict[key] ? dict[key].push(arr[i]) : dict[key] = [arr[i]];
  }
  return dict;
}

// console.log(anagramGroups(['are', 'bat', 'tab', 'ear', 'era', 'code', 'atm', 'mat']));

module.exports = anagramGroups;
