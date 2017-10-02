function ID(p) {
  return p;
}

function NOT(p) {
  return !p;
}

function AND(p, q) {
  return p && q;
}

function OR(p, q) {
  return p || q;
}

function TAUTOLOGY(p){
  return OR(p, 1);
}

function CONTRADICTION(p){
  return AND(p, 0);
}

function NAND(p, q) {
  return NOT(AND(p, q));
}

function NOR(p, q) {
  return NOT(OR(p, q));
}

function IMPLIES(p, q) {
  return NOT(AND(p, NOT(q)));
}

function EQUALS(p, q) {
  return AND(IMPLIES(p, q), IMPLIES(q, p));
}

function XOR(p, q) {
  return NOT(EQUALS(p, q));
}

function HALFADDER(p, q) {
  var result = {};
  result.sum = XOR(p, q);
  result.carry = AND(p, q);
  return result;
}

function FULLADDER(p, q, c) {
  var result = {};
  var xor = XOR(p, q);
  var and = AND(p, q);

  result.sum = XOR(xor, c);
  result.carry = OR(AND(xor, c), and);

  return result;
}

console.log(FULLADDER(0, 0, 0));
console.log(FULLADDER(0, 0, 1));
console.log(FULLADDER(0, 1, 0));
console.log(FULLADDER(1, 0, 0));
console.log(FULLADDER(0, 1, 1));
console.log(FULLADDER(1, 0, 1));
console.log(FULLADDER(1, 1, 0));
console.log(FULLADDER(1, 1, 1));


