var anagramPalindrome = function(word) {
  // you code here
  // Count number of occurrences of each letter
  // if they are all even number of occurrences
    // or if one letter has an odd number of occurrences
  //return true
    //else return false

  var dic = {};
  var oddCount = 0;
  var letter;

  for(var i = 0; i < word.length; i++){
    letter = word[i];

    if(!dic[letter]){
      dic[letter] = 1;
    } else {
      dic[letter] += 1;
    }
  }

  for(var letter in dic){
    if(dic[letter] % 2 === 1){
      oddCount++;
    }
  }

  if(oddCount > 1){
    return false;
  }
  return true;


};

console.log(anagramPalindrome("carrace")); // true
console.log(anagramPalindrome("cutoo")); // false
console.log(anagramPalindrome("dddaayyy")); // false
console.log(anagramPalindrome("ddddaaayyyy")); // true
