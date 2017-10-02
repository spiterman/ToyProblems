var reverseVowels = function(word) {
  // your code here
  var forwardIndex = 0;
  var backwardIndex = word.length - 1;
  var vowels = {};
  vowels.a = 'a';
  vowels.e = 'e';
  vowels.i = 'i';
  vowels.o = 'o';
  vowels.u = 'u';

  var temp;

  while(forwardIndex < backwardIndex){
    if(vowels[word[forwardIndex]] && vowels[word[backwardIndex]]){
      temp = word[forwardIndex];
      word[forwardIndex] = word[backwardIndex];
      word[backwardIndex] = temp;
      forwardIndex++;
      backwardIndex--;
    } else{
      if(!vowels[word[forwardIndex]]){
        forwardIndex++;
      }
      if(!vowels[word[backwardIndex]]){
          backwardIndex--;
      }
    }
  }

  return word;
};

//Loop through the array simulatneously forward and backward
  //save any vowels that are found
  //once the loop encounters a vowel going forward and backward, swap
  //stop when forward and backward indices match
  //return word

console.log(reverseVowels(["d","a","v","i","d","o"]));
console.log(reverseVowels(["d","a","v","i","d","o", 'u']));
console.log(reverseVowels(["a", "e", "i","o","u"]));
