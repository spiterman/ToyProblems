var isPowerOfTwo = function(n) {
    if(n === 1) {return true}
    if(n % 2 === 1 || n === 0) {return false}
    return isPowerOfTwo(n/2)
};

module.exports = isPowerOfTwo;
