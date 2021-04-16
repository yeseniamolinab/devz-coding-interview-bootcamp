// First try
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

// Second try after feedback
function twoSumB(nums, target) {
    let complementMap = new Map();
    for(let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if(complementMap.has(complement)) {
            return [complementMap.get(complement), i];
        }
        complementMap.set(nums[i], i);
    }
    return [];
}

/** First Try Tests */
// Big O
console.log('twoSum The time & space complexity: O(n ^ 2): - Quadratic time:', '\n')

// Tests
console.log(twoSum([2,7,1,5], 9), '[0,1]');
console.log(twoSum([3,-1,0,1], 0), '[1,3]');

/** Second Try Tests */
// Big O
console.log('twoSumB The time & space complexity: O(n): - Linear time:', '\n')

// Tests
console.log(twoSumB([2,7,1,5], 9), '[0,1]');
console.log(twoSumB([3,-1,0,1], 0), '[1,3]');
