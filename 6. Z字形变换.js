/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    if (numRows === 1) return s;
    let len = s.length
    let str = '';
    let cycleLen = 2 * numRows - 2
    for(let i = 0; i < numRows; i ++){
        for(let j = 0; j + i < len; j += cycleLen){
            str += s[j + i]
            if (i !== 0 && i !== numRows - 1 && j + cycleLen - i < len) {
                str += s[j + cycleLen - i]
            }
        }
    }
    return str
};

console.log(convert("LEETCODEISHIRING", 4)) // LDREOEIIECIHNTSG
                    