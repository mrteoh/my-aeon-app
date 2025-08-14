//usage : $ node saveAnswer.ts

/**
 * @param {number[]} numbers
 * @param {number} target
 * @returns {number[]}
 */

const twoSum = function (numbers: number[], target: number): number[] | null {
  let left: number = 0;
  let right: number = numbers.length - 1;
  let res: number[] = [];

  while (left < right) {
    const sum: number = numbers[left] + numbers[right];

    if (sum === target) {
      res = [left + 1, right + 1]; // 1-indexed
      break;
    } else if (sum < target) {
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
