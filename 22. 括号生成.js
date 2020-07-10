/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    if(n === 0) return ['']
    if(n === 1) return ['()']
    const result = []
    for(let p = 0; p < n; p++) {
        const q = n - 1 - p
        generateParenthesis(p).forEach(item => {
            generateParenthesis(q).forEach(model => {
                result.push(`(${item})${model}`)
            })
        })
    }
    return result
};

console.log(generateParenthesis(3))