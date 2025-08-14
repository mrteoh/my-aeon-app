//usage : $ node saveAnswer.js

const twoSum = function (nums, t) {
  let left = 0;
  let right = nums.length - 1;
  let res = [];

  while (left < right) {
    const sum = nums[left] + nums[right];
    if (sum === t) {
      res = [left + 1, right + 1]; // 1-indexed
      break;
    } else if (sum < t) {
      left++;
    } else {
      right--;
    }
  }

  if (res.length === 0) {
    console.log('No solution found!');
    return null;
  }

  return res;
};

// Test
console.log(twoSum([4, 11, 17, 25], 21)); // answer: [1,3]
console.log(twoSum([0, 1, 2, 2, 3, 5], 4)); // answer: [2,5]
console.log(twoSum([-1, 0], -1)); // answer: [1,2]