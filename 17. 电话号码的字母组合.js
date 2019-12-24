/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    const mapKey = {
        2: 'abc',
        3: 'def',
        4: 'ghi',
        5: 'jkl',
        6: 'mno',
        7: 'pqrs',
        8: 'tuv',
        9: 'wxyz'
    }
    let output = []

    function backtrack (combination, next_digits) {
        if (next_digits.length === 0) {
            output.push(combination)
        } else {
            let digit = next_digits.substring(0, 1)
            let letters = mapKey[digit]
            for (let i = 0; i < letters.length; i ++) {
                backtrack(combination + letters[i], next_digits.substring(1))
            }
        }
    }

    if (digits.length) {
        backtrack('', digits)
    }
    return output
};

console.log(letterCombinations('239'))