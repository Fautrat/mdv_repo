/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
    if (n <= 0) return false;
    if (n === 1) return true;
    return n % 3 === 0 && isPowerOfThree(n / 3);
};

let s = ["h","e","l","l","o"];

s.reverse();

if (t == t2) console.log('true');