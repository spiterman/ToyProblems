function addLarge(str1, str2) {
  let result = "";
  let smallIndex = Math.min(str1.length, str2.length);
  let largeIndex = Math.max(str1.length, str2.length);

  let newStr1 = str1.split("").reverse().join("")
  let newStr2 = str2.split("").reverse().join("")

  let longString;

  if(newStr1 > newStr2) {
    longString = newStr1;
  } else {
    longString = newStr2;
  }

  let carry = 0;

  for(let i = 0; i < smallIndex; i++){
    let sum = Number(newStr1[i]) + Number(newStr2[i]) + carry;
    if(sum >= 10) {
      carry = 1;
    } else {
      carry = 0;
    }
    result += sum % 10
  }

  for(let i = smallIndex; i < largeIndex; i++) {
    let sum = Number(longString[i]) + carry
    if(sum >= 10) {
      carry = 1;
    } else {
      carry = 0;
    }
    result += sum % 10
  }

  if(carry) {
    result += 1;
  }

  return result.split("").reverse().join("")
}

console.log(addLarge("99999999", "1000"))
