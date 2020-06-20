"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
exports.default = twoSum;

//# sourceMappingURL=两数之和.js.map
