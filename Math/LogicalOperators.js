'use strict';

function ID(p) {
  return p;
}

function TAUTOLOGY(p){
  return true;
}

function CONTRADICTION(p){
  return false;
}

function NOT(p) {
  if (p) {
    return true;
  }
  return false;
}

function OR(p, q) {
  if(p) {
    return true;
  }
  if(q) {
    return true;
  }
  return false;
}

function AND(p, q) {
  if(NOT(p)) {
    return false;
  }
  if(NOT(q)) {
    return false;
  }
  return true;
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

function XNOR(p, q) {
  return NOT(XOR(p, q));
}

function HALFADDER(p, q) {
  return [XOR(p, q), AND(p, q)];
}

function FULLADDER(p, q, c) {
  return [XOR(XOR(p, q), c), OR(AND(XOR(p, q), c), AND(p, q))]
}

console.log(FULLADDER(0, 0, 0));
console.log(FULLADDER(0, 0, 1));
console.log(FULLADDER(0, 1, 0));
console.log(FULLADDER(1, 0, 0));
console.log(FULLADDER(0, 1, 1));
console.log(FULLADDER(1, 0, 1));
console.log(FULLADDER(1, 1, 0));
console.log(FULLADDER(1, 1, 1));
