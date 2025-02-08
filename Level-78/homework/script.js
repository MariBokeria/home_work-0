function twoSum(nums, target) {
    // Loop through each number in the array
    for (let i = 0; i < nums.length; i++) {
      // Loop through the remaining numbers to check for a match
      for (let j = i + 1; j < nums.length; j++) {
        // Check if the two numbers add up to the target
        if (nums[i] + nums[j] === target) {
          return [i, j]; // Return their indices
        }
      }
    }
  }
  
  // Test cases
  console.log(twoSum([1, 2, 3], 4));  // [0, 2] or [2, 0]
  console.log(twoSum([3, 2, 4], 6));  // [1, 2] or [2, 1]
  