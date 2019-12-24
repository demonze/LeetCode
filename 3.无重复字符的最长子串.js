/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let len = 0
    let str = ''
    let sLen = s.length
    for (let i = 0; i < sLen; i ++) {
        let index = str.indexOf(s[i])
        // if (index === -1) {
        //     str += s[i]
        // } else {
        //     len = len > str.length ? len : str.length
        //     str = str.slice(index + 1)
        //     str += s[i]
        // }
        if (index !== -1) {
            len = len > str.length ? len : str.length
            str = str.slice(index + 1)
        }
        str += s[i]
    }
    return str.length > len ? str.length : len
};

console.log(lengthOfLongestSubstring('dvdf')) //3
console.log(lengthOfLongestSubstring('abcaaabcd')) //4
console.log(lengthOfLongestSubstring('pwwkew')) //3
console.log(lengthOfLongestSubstring('hhhhhh')) //1

console.log(lengthOfLongestSubstring('abcaaabcdaaaa')) //4
console.log(lengthOfLongestSubstring('nfpdmpi')) // 5
