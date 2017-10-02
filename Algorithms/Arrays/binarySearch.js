function binarySearch (array, target){
  if(array.length === 0) return -1;

  var mid = Math.floor(array.length/2);



}




//List of tests
var tests = [
  binarySearch([1], 1) === 0,
  binarySearch([1, 2, 3], 2) === 1,
  binarySearch([1, 2, 3, 4, 5], 4) === 3,
  binarySearch([4, 5, 7], 1) === -1,
  binarySearch([], 10) === -1,
  binarySearch([1, 2, 3, 4], 3) === 2

];


//All tests should be true
tests.forEach(function(item){
  console.log(item);
});
