// https://leetcode.com/problems/permutations/submissions/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    let seen = new Set();
    let result = [];

    function addInteger(permutation) {

        if(permutation.length === nums.length) {
            result.push(permutation);
            return;
        }

        for(let i = 0; i < nums.length; i++) {
            let currentNum = nums[i];
            if(!seen.has(currentNum)) {
                seen.add(currentNum);
                let newPermutation = permutation.slice();
                newPermutation.push(currentNum);
                addInteger(newPermutation);
                seen.delete(currentNum);
            }
        }
    }

    addInteger([]);
    return result;
};
