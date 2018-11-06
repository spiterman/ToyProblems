/*
Perform Heapsort in place
*/

const Swap = require('../Arrays/Swap');

function Heapsort(arr) {
  // return arr

  for(let i = arr.length; i < arr.length; i++) {

  }
}

function MaxHeapify(arr) {

  // function helper(index) {
  //   if(index >= arr.length || index === 0) {
  //     return;
  //   }
  //   if(index % 2 === 0) {
  //
  //   } else {
  //   }
  //
  // }
}
//
function BubbleDown(arr, i){
  if(i > arr.length){
    return;
  }


  if(arr[i] < arr[2 * i + 1] && arr[i] < arr[2 * i + 2]){
    let indexToSwap;
    Swap()
  }

}

// Test
// console.log(Heapsort([9, 2, 7, 4, 5, 1, 8, 0, 3, 6]));

// console.log(2 > undefined)=

module.exports = Heapsort;
