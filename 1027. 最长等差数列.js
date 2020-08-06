// 给定一个整数数组 A，返回 A 中最长等差子序列的长度。

// 回想一下，A 的子序列是列表 A[i_1], A[i_2], ..., A[i_k] 其中 0 <= i_1 < i_2 < ... < i_k <= A.length - 1。并且如果 B[i+1] - B[i]( 0 <= i < B.length - 1) 的值都相同，那么序列 B 是等差的。

 

// 示例 1：

// 输入：[3,6,9,12]
// 输出：4
// 解释： 
// 整个数组是公差为 3 的等差数列。
// 示例 2：

// 输入：[9,4,7,2,10]
// 输出：3
// 解释：
// 最长的等差子序列是 [4,7,10]。
// 示例 3：

// 输入：[20,1,15,3,10,5,8]
// 输出：4
// 解释：
// 最长的等差子序列是 [20,15,10,5]。

// ------------------- 没做对 --------------------

/**
 * @param {number[]} A
 * @return {number}
 */
let longestArithSeqLength = function (A) {
    let len = A.length
    if (len < 2) return len
    let res = 0
    let dp = []
    for (let i = 1; i < len; i++) {
        dp[0] = A[i - 1]
        for (let m = i + 1; m < len ; m ++ ) {
            dp[m] = A[m - 1]
            let target = 2 * dp[m - 1] - dp[m - 2]
            for (let n = m + 1; n < len; n ++) {
                console.log(target)
                if (target === A[n]){
                    dp[m] = target
                    target = 2 * dp[n - 1] - dp[n - 2]
                }
            }
            res = Math.max(res, dp.length)
            console.log(target, dp, m, res)
        }
    }
    return res
}
// let longestArithSeqLength = function (A) {
//     let len = A.length
//     if (len < 3) return n
//     let dp = {}
//     let max = 0
//     let dis
//     for (let i = 0; i < len; i ++) {
//         dp = {}
//         for (let j = i + 1; j < len; j ++) {
//             dis = A[j] - A[i]
//             dp[dis] = dp[dis] + 1 || 2
//         }
//         // max = Math.max(...Object.values(dp), max)
//         console.log(max, dp)
//     }
//     // console.log(dp)
//     return Math.max(...Object.values(dp))
//     // return max
// }

console.log(longestArithSeqLength([3,6,9,12])) // 4
// console.log(longestArithSeqLength([9,4,7,2,10])) // 3
// console.log(longestArithSeqLength([20,1,15,3,10,5,8])) // 4
// console.log(longestArithSeqLength([83,20,17,43,52,78,68,45])) // 2


