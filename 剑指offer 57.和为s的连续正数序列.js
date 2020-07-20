// 输入一个正整数 target ，输出所有和为 target 的连续正整数序列（至少含有两个数）。

// 序列内的数字由小到大排列，不同序列按照首个数字从小到大排列。

// 示例 1：

// 输入：target = 9
// 输出：[[2,3,4],[4,5]]

// 示例 2：

// 输入：target = 15
// 输出：[[1,2,3,4,5],[4,5,6],[7,8]]

/**
 * @param {number} target
 * @return {number[][]}
 */
// var findContinuousSequence = function(target) {
//     if (target < 3) return []
//     let n = Math.ceil(target / 2)
//     let left = 1
//     let right = 2
//     let sum = 1
//     let res = []
//     while (left < n) {
//         if (sum < target) {
//             sum += right++
//             continue
//         }
//         if (sum > target) {
//             sum -= left++
//             continue
//         }
//         if (sum === target) {
//             res.push(getArr(left, right))
//             // right = ++left + 1
//             // sum = left
//             sum -= left++
//         }
//     }
//     return res
// };

var findContinuousSequence = function(target) {
    if (target < 3) return []
    let n = Math.ceil(target / 2)
    let left = 1
    let right = 2
    let sum = 1
    let res = new Array()
    while (left < n) {
        if (sum < target) {
            sum += right++
            continue
        }
        if (sum === target) {
            res.push(getArr(left, right))
        }
        sum -= left++
    }
    return res
};

// function getArr (i, j) {
//     let res = []
//     for (let m = i; m < j; m++) {
//         res.push(m)
//     }
//     return res
// }
function getArr (i, j) {
    let res = new Array()
    for (let m = 0; m < j - i; m++) {
        res[m] = i + m
    }
    return res
}

console.log(findContinuousSequence(6))
console.log(findContinuousSequence(7))
console.log(findContinuousSequence(9))
console.log(findContinuousSequence(15))