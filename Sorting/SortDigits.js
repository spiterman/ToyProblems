function sortDigits(num){
    let nums = {}
    let power = 1;
    let result = 0;

    while(num > 0){
        let numToSubtract = num % Math.pow(10, power);
        num -= numToSubtract;
        let digit = numToSubtract / Math.pow(10, power - 1);

        if(nums[digit] !== undefined) {
            nums[digit] += 1;
        } else {
            nums[digit] = 1;
        }

        power++
    }

    power--;

    for(let i = 0; i < 10; i++){
        while(nums[i] !== undefined && nums[i] > 0){
            power--;
            result += Number(i) * Math.pow(10, power);
            nums[i] -= 1;
        }
    }
    return result;
}

// console.log(sortDigits(2975920661000001))

module.exports = sortDigits;
