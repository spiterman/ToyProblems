var convertToBase7 = function(num) {
    let result = "";
    let sign = "";
    if(num < 0) {
        sign = "-";
    }
    if(num === 0) {
        return "0";
    }
    num = Math.abs(num);
    while(num > 0) {
        let mod = num % 7;
        num = (num - mod)/7;
        result = mod + result;
    }
    return sign + result;
};
