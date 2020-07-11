// 给定一个含有 n 个正整数的数组和一个正整数 s ，找出该数组中满足其和 ≥ s 的长度最小的子数组，并返回其长度。如果不存在符合条件的子数组，返回 0。

// 示例：

// 输入：s = 7, nums = [2,3,1,2,4,3]
// 输出：2
// 解释：子数组 [4,3] 是该条件下的长度最小的子数组。

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/minimum-size-subarray-sum
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

/**
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(s, nums) {
    let len = nums.length
    if (s < 1 || len < 1) return 0
    let left = 0
    let right = 0
    let sum = 0
    let res = Infinity
    while (left < len) {
        if (sum < s) {
            sum += nums[right++]
        }
        else {
            sum -= nums[left++]
        }
        if (sum >= s) {
            res = Math.min(res, right - left)

            // left ++
            // right = left
            // sum = 0
        }
        console.log(left, right, sum, res)
    }
    return res !== Infinity ? res : 0
};

console.log(minSubArrayLen(20, [2,3,1,2,4,3,8]))