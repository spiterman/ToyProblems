// function ways(total, k) {
//     // Write your code here
//     function compute(currentNum, subTotal) {
//         if(currentNum > k || subTotal < 0) {
//             return 0;
//         }
//         if(subTotal === 0) {
//             return 1;
//         }
//         let result = 0;
//         for(let i = currentNum; i <= k; i++) {
//             result += compute(i, subTotal - i);
//         }
//         return result % 1000000007;
//     }

//     return compute(1, total);
// }

function ways(total, k) {
    let table = new Array(total + 1).fill(0);
    table[0] = 1;
    for(let i = 1; i <= k; i++) {
        for(let j = i; j <= total; j++) {
            let result = (table[j] + table[j - i])%1000000007;
            table[j] = result;
        }
    }
    return table[total]
}
