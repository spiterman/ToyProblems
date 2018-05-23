/* Given a mathematical expression as a string with prefix notation
return what it would evaluate to.
*/


let test = "(+ (* 10 (+ 5 2) 2) 50)"

function parseExpression(str) {
  let arr = str.split(""); //O(N) split into characters
  let currentNumber = "";
  let newArr = [];

  for(let i = 0; i < arr.length; i++) { //O(N) joins numbers
    if(!isNaN(parseInt(arr[i]))) {
      currentNumber += arr[i];
    }
    else {
      newArr.push(currentNumber);
      currentNumber = "";
      newArr.push(arr[i]);
    }
  }

  let chars = newArr.filter(char => char != "" && char != " "); //O(N) Removes Whitespace

  let stack = [[]];

  for(let i = 0; i < chars.length; i++) {
    if(chars[i] === "(") {
      stack.push([]);
    } else if(chars[i] === ")") {
      let top = stack.pop();
      stack[stack.length - 1].push(top);
    } else {
      stack[stack.length - 1].push(chars[i]);
    }
  }

  return evaluateExpression(stack[0][0])
}

// Takes in an array and evaluates it;
function evaluateExpression(expr) {
  let accumulator;
  if(expr[0] === "*") {
    accumulator = 1;
    for(let i = 1; i < expr.length; i++) {
      if(Array.isArray(expr[i])) {
        accumulator *= evaluateExpression(expr[i]);
      } else {
        accumulator *= parseInt(expr[i]);
      }
    }

  } else if(expr[0] === "+") {
    accumulator = 0;
    for(let i = 1; i < expr.length; i++) {
      if(Array.isArray(expr[i])) {
        accumulator += evaluateExpression(expr[i]);
      } else {
        accumulator += parseInt(expr[i]);
      }
    }
  }
  return accumulator;
}

parseExpression(test)
