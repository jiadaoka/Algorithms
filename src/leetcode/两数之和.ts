/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
function twoSum (nums: number[], target: number): number[]{
  const arr: number[] = []
  const l = nums.length

  for(let i = 0;i<l;i++){
    const i2 = nums.indexOf(target - nums[i])
    if(i2 !== -1 && i2 !== i){
      arr.push(i,i2)
      break
    }
  }

  return arr
}

export default twoSum
