//An experiment in JavaScript Assignment

//Assigning b to an index of a
var a = [1, 2, 3, 4];
var b = a[0];
console.log(b); //1
a[0] = 9;
console.log(b) //1

//So 'b' does not update when 'a' is changed;

//Assigning indices of a to variables b->d
var b = 1;
var c = 2;
var d = 3;

var a = [];

a[0] = b;
a[1] = c;
a[2] = d;

console.log(a[0]);
b = 9;
console.log(a[0])

//The reverse direction of assignment doesn't work either



//Solution
//Create an object that stores those values
function createNode(n){
  this.val = n;
}



var b = new createNode(1);
var c = new createNode(2);
var d = new createNode(3);

var a = [];

a[0] = b;
a[1] = c;
a[2] = d;

console.log(a[0].val);

b.val = 9;

console.log(a[0].val)

