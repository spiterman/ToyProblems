/*
Write a function that returns the minimum number of moves it takes to solve the tower of Hanoi.
Examples:
Hanoi(1) => 1
Hanoi(2) => 3
Hanoi(3) => 7
Hanoi(4) = 15
*/

const Hanoi = (discs) => discs === 0? 0 : 2 * Hanoi(discs - 1) + 1

// Test
// console.log(Hanoi(4))

module.exports = Hanoi;
