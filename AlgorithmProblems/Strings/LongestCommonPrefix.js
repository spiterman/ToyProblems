//https://leetcode.com/problems/longest-common-prefix/submissions/

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let prefix = "";
    if(strs.length === 0) return prefix;

    for(let j = 0; j < strs[0].length; j++) {
        let char = strs[0][j];

        for(let i = 0; i < strs.length; i++) {
            if(j >= strs[i].length || strs[i][j] !== char) {
                return prefix;
            }
        }
        prefix += char;
    }
    return prefix;
};
