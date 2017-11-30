'use strict'

function poisonPigs(buckets, minutesToDie, minutesToTest) {
  let testInterval = minutesToTest / minutesToDie + 1;
  let numberOfPigs = 0;
  while(Math.pow(testInterval, numberOfPigs) < buckets) {
      numberOfPigs++;
  }

  return numberOfPigs;
}


module.exports = poisonPigs;
