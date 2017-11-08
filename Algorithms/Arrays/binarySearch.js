function binarySearch(arr, target) {
    let start = 0;
    let end = arr.length;
    let counter = 0;

    while(start <= end) {
        // console.log('entered the loop ' + counter + ' times' )
        counter++
        let mid = Math.floor((start + end) / 2);
        if (arr[mid] === target) return mid;
        if (target > arr[mid]) start = mid + 1;
        else end = mid - 1;
    }
    return -1;
}


// console.log(binarySearch([1, 3, 6, 7, 8, 10, 19, 23, 30, 32, 49, 50, 56, 60, 78, 85], 2));
// //List of tests
// var tests = [
//   binarySearch([1], 1) === 0,
//   binarySearch([1, 2, 3], 2) === 1,
//   binarySearch([1, 2, 3, 4, 5], 4) === 3,
//   binarySearch([4, 5, 7], 1) === -1,
//   binarySearch([], 10) === -1,
//   binarySearch([1, 2, 3, 4], 3) === 2
// ];
// tests.forEach(function(item){
//   console.log(item);
// });

module.exports = binarySearch;
