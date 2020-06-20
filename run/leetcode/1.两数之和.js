/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
function twoSum(nums, target) {
  const arr = [];
  const l = nums.length;
  for (let i = 0; i < l; i++) {
      const i2 = nums.indexOf(target - nums[i]);
      if (i2 !== -1 && i2 !== i) {
          arr.push(i, i2);
          break;
      }
  }
  return arr;
}
// @lc code=end

