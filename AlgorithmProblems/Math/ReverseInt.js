/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let strInt = (x + "").split("").reverse();
    let sign = 1;

    if(strInt[strInt.length - 1] === "-") {
        sign = -1;
        strInt.pop();
    }

    let newInt = parseInt(strInt.join(""))

    if(newInt > (Math.pow(2, 31) - 1) || newInt < (Math.pow(-2, 31))) {
        return 0;
    }

    return newInt * sign;
};
