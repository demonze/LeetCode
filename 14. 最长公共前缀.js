/**
 * @param {string[]} strs
 * @return {string}
 */
// 解法一
// var longestCommonPrefix = function(strs) {
//     // let str = '';
//     return strs.reduce((pre, cur, index) => {
//         if (index === 0) return cur
//         return findCommon(pre, cur)
//     }, '')
//     // return str
// };

// function findCommon (str1, str2) {
//     let n = Math.min(str1.length, str2.length)
//     let str = ''
//     for (let i = 0; i < n; i ++) {
//         if (str1[i] !== str2[i]) return str
//         str += str1[i]
//     }
//     return str
// }

// 解法二
var longestCommonPrefix = function(strs) {
    if (strs.length === 0) return '';
    for (let i = 0; i < strs[0].length; i ++) {
        let str = strs[0][i]
        for (let j = 1; j < strs.length; j ++) {
            if (strs[j].length === i || strs[j][i] !== str) {
                return strs[0].substring(0, i)
            }
        }
    }
    return strs[0]
};

// let strArr = ["flower","flow","flight"]

let strArr = ["abb","abc"]

console.log(longestCommonPrefix(strArr))