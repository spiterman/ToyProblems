'use strict';

module.exports = {
  prompt: (input) => {
    const rawInput = input.split('\n');
    let write = true;
    let results = [];

    rawInput.forEach((line) => {
      if (line.indexOf('{{{') > -1) {
        write = false;
      } else if (line.indexOf('---') > -1 || line.indexOf('}}}') > -1 ){
        write = true;
      } else if (write) {
        results.push(line);
      }
    });

    return results.join('\n');
  },
  solution: (input) => {
    const rawInput = input.split('\n');
    let write = true;
    let results = [];

    rawInput.forEach((line) => {
      if (line.indexOf('---') > -1) {
        write = false;
      } else if (line.indexOf('{{{') > -1 || line.indexOf('}}}') > -1 ){
        write = true;
      } else if (write) {
        results.push(line);
      }
    });

    return results.join('\n');
  }
};
