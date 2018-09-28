function stringPermutations(str) {
  let result = [''];
  let index = 0;

  while(index < str.length) {
    let temp = [];
    for(let i = 0; i < result.length; i++) {
      let word = result[i];
      for(let j = 0; j <= word.length; j++) {
        temp.push(addLetterToWord(word, str[index], j));
      }
    }
    index++;
    result = temp;
  }
  return result;
}

// console.log(stringPermutations('abcd'));

function addLetterToWord(word, letter, index) {
  let test = word.split('');
  test.splice(index, 0, letter);
  return test.join('')
}

// console.log(addLetterToWord('', 'd', 3))
