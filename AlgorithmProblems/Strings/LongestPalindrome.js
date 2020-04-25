/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    let letterCounts = {};
    for(let i = 0; i < s.length; i++) {
        let char = s[i]
        if(letterCounts[char] === undefined) {
            letterCounts[char] = 0;
        }
        letterCounts[char] += 1; 
    }

    let totalEvens = 0;
    let maxOdd = 0;

    for(let c in letterCounts) {
        console.log(c)
        let charCount = letterCounts[c]
        if(charCount % 2 === 0) {
            totalEvens += charCount;
        } else if(maxOdd === 0 && charCount % 2 === 1){
            maxOdd = charCount;
        } else {
            totalEvens += (Math.min(maxOdd, charCount) - 1);
            maxOdd = Math.max(maxOdd, charCount);
        }
    }
    return totalEvens + maxOdd;
};
