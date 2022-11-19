var isPowerOfThree = function (n) {
    let i = 0
    while (3 ** i <= n) {
        if (3 ** i === n) return true
        i++
    }
    return false
};

console.log(isPowerOfThree(27))
// var isPowerOfThree = function (n) {
//     return (Math.log10(n) / Math.log10(3)) % 1 == 0;
//};




// for power of 4
// First simplify the problem:
// n = 4^x = 2^2x
// Taking log2 on both side we get
// => log2(n) = 2xlog2(2)
// => x = log2(n) / 2

// if x is integer then the given number n should have output true. Other wise the output would be false.
// Code for this in Javascript:

let x = Math.log2(n) / 2
return Number.isInteger(x)

var isPowerOfFour = function (n) {
    return Number.isInteger(Math.log(n) / Math.log(4));
};