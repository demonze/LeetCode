/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    if (x < 0) {

        x = ('' + x).substring(1)
        return parseInt('-' + x.split('').reverse().join(''))
    }
    return parseInt(('' + x).split('').reverse().join(''))
};

console.log(reverse(-12340))