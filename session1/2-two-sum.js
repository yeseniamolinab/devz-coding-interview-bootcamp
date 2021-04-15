function twoSum(nums, target) {
    for(let i = 0; i < nums.length; i++) {
        for(let j = 0; j < nums.length; j++) {
            if(i == j) {
                continue;
            }
            if(nums[i] + nums[j] === target) {
                return [i, j];
            }
        }
    }

    return [];
}

// Big O
console.log('The time & space complexity: O(n ^ 2): - Quadratic time:', '\n')

// Tests
console.log(twoSum([2,7,1,5], 9), '[0,1]');
console.log(twoSum([3,-1,0,1], 0), '[1,3]');