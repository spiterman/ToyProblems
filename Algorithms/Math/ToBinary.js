function toBinary(int) {
  let exponent = 0;
  let result = '';

  while (Math.pow(2, exponent) * 2 < int) {
    exponent++;
  }

  while(int > 0) {
    let num = Math.pow(2, exponent);

    if(int >= num) {
      int -= num;
      result += 1
    } else {
      result += 0;
    }
    exponent--;
  }

  return result;
}

module.exports = toBinary;
