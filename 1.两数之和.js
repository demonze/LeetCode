/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// var twoSum = function(nums, target) {
//     nums = nums || []
//     let len = nums.length
//     if (len === 0) return []
//     for (let i = 0; i < len; i ++) {
//         for (let j = i + 1; j < len; j ++) {
//             if (nums[i] + nums[j] === +target) {
//                 return [i, j]
//             }
//         }
//     }
//     return []
// };

var twoSum = function(nums, target) {
    nums = nums || []
    let len = nums.length
    if (len === 0) return []
    let temp = {}
    for (let i = 0; i < len; i ++) {
        let diff = target - nums[i]
        if (temp[diff] !== undefined) return [temp[diff], i]
        temp[nums[i]] = i
    }
    return []
};

console.log(twoSum([3, 2, 4], 6))