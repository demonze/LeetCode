/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const map = {
        '(': ')',
        '[': ']',
        '{': '}'
    }
    let arr = []
    for (let char of s) {
        if (char in map) {
            arr.push(char)
        } else {
            if (!arr.length || char != map[arr.pop()]) {
                return false
            }
        } 
    }
    return !arr.length
};

console.log(isValid('{{{}()}}'))