/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if (x < 0) return false
    let str = '' + x
    let len = str.length
    let l = len % 2 ? (len - 1) / 2 : (len / 2 - 1);
    let r = len % 2 ? (len - 1) / 2 : (len / 2)
    while(l >= 0 && r < len) {
        if (str[l] === str[r]) {
            l --;
            r ++;
        }
        else {
            return false
        }
    }
    return true
};

console.log(isPalindrome(1230321))