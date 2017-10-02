/*
As a user I can enter a phrase "hello" and see it translated to Pig Latin "ellohay" X

As a user I can enter a phrase "hello world" and see it translated to Pig Latin "ellohay orldway" X

As a user I can enter a phrase "Hello World" and see it translated to Pig Latin "Ellohay Orldway" X

As a user I can enter a phrase "Hello, world!" and see it translated to Pig Latin "Ellohay, orldway!" X

As a user I can enter a phrase "eat apples" and see it translated to Pig Latin "eatay applesay"

As a user I can enter a phrase "quick brown fox" and see it translated to Pig Latin "ickquay ownbray oxfay"
*/

function PigLatin(str){
  var result = [];
  var arr = str.split(' ');

  arr.forEach((item) => {
    result.push(handleCapitals(item) + removePunctuation(item) + item[0].toLowerCase() + 'ay' + returnPunctuation(item));
  });

  return result.join(' ');
}

function handleCapitals(str){
  if(str[0] === str[0].toUpperCase()){
    return str[1].toUpperCase();
  } else {
    return str[1];
  }
}

function removePunctuation(str) {
  if(str.match(/\W/)){
    return str.slice(2, str.length - 1)
  } else {
    return str.slice(2, str.length);
  }
}

function returnPunctuation(str){
  if(str.match(/\W/)){
    return str[str.length - 1];
  } else {
    return "";
  }
}

console.log(PigLatin('hello') === 'ellohay', PigLatin('hello'));
console.log(PigLatin('hello world') === 'ellohay orldway', PigLatin('hello world'));
console.log(PigLatin('Hello World') === 'Ellohay Orldway', PigLatin('Hello World'));
console.log(PigLatin('Hello, World!') === 'Ellohay, Orldway!', PigLatin('Hello, World!'));
