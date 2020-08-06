/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
    let len = s.length
    if (len < 2) return s
    let res = s[0]
    let dp = []
    for (let i = len - 1; i >= 0; i --) {
        dp[i] = []
        for (let j = i; j < len; j ++) {
            if (i === j) {
                dp[i][j] = true
            } else if (j - i === 1 && s[i] === s[j]) {
                dp[i][j] = true
            } else {
                dp[i][j] = s[i] === s[j] && dp[i + 1][j - 1]
            }
            if (dp[i][j] && j - i + 1 > res.length){
                res = s.slice(i, j + 1)
            }
            console.log(dp)
        }
    }
    return res
}
// var longestPalindrome = function(s) {
//     let length = s.length
//     if (length < 2) return s
//     let left = 0, right = 0, len = 0;
//     let len1, len2;
//     for(let i = 0; i < length; i ++){
//         len1 = findPalindromeLen(i, i, s)
//         len2 = findPalindromeLen(i, i + 1, s)
//         len = Math.max(len1, len2)
//         console.log(len1, len2, len, s.substring(left, right + 1))
//         if (len > right - left){
//             left = i - Math.floor((len - 1) / 2)
//             right = i + Math.floor(len / 2)
//         }
//     }
//     return s.substring(left, right + 1)
// };

// function findPalindromeLen (l, r, s) {
//     let lt = l, rt = r, len = s.length
//     while(lt >= 0 && rt < len && s[lt] === s[rt]){
//         lt --;
//         rt ++;
//     }
//     return rt - lt - 1
// }

// let result = longestPalindrome("aaabbaaa")
let result = longestPalindrome("bb")
console.log('res:', result)