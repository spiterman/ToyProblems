// Suppose you are creating an internal networking site for your company. You have two data sets to work with.
// The first data set is the employees at your company, and the second is all the pairs of employees who are virtually friends so far.
// It does not matter which employee's ID is in which column, the friendships are bidirectional.
// You want to know who’s friends with whom.
// You need to implement a function that, given the employees and friendships as parameters,
// returns this data in the form of an adjacency list representation.
// This should associate each employee ID to his/her friends on the site.


var employees_input = [
  "1,Richard,Engineering",
  "2,Erlich,HR",
  "3,Monica,Business",
  "4,Dinesh,Engineering",
  "6,Carla,Engineering",
  "9,Laurie,Directors"
];


var friendships_input = [
  "1,2",
  "1,3",
  "1,6",
  "2,4"
];


function findNetwork(employees_input, friendships_input) {
  let result = {};

  for(let i = 0; i < employees_input.length; i++) {
    let employee = employees_input[i].split(",");
    result[employee[0]] = []
  }

  for(let i = 0; i < friendships_input.length; i++) {
    let friendship = friendships_input[i].split(",");
    result[friendship[0]].push(Number(friendship[1]))
    result[friendship[1]].push(Number(friendship[0]))
  }

  return result;

}

console.log(findNetwork(employees_input, friendships_input))
// {
//   1: [2, 3, 6],
//   2: [1, 4],
//   3: [1],
//   4: [2],
//   6: [1],
//   9: []
// }
