"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function twoSum(nums, target) {
  var arr = [];
  var l = nums.length;

  for (var i = 0; i < l; i++) {
    var i2 = nums.indexOf(target - nums[i]);

    if (i2 !== -1 && i2 !== i) {
      arr.push(i, i2);
      break;
    }
  }

  return arr;
}

exports["default"] = twoSum;