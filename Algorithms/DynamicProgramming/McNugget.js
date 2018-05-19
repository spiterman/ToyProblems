
function mcNugget(num) {
  let nuggets = [];


  for(let i = 0; i <= num; i++) {
    nuggets.push(0);
  }

  nuggets[0] = 1;

  let boxSizes = [6, 9, 20];
  

  for(let size = 0; size < boxSizes.length; size++) {
    for(let i = 1; i <= num; i++) {
      if((i - boxSizes[size]) >= 0 && nuggets[i - boxSizes[size]] === 1) {
        nuggets[i] = 1;
      }
    }
    if(nuggets[num] === 1) {
      return true;
    }
  }
  return false;
}


console.log(mcNugget(19))
