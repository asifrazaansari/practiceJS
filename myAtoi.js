var myAtoi = function (str) {
    // Base condition
    if (!str) {
        return 0;
    }
    // MAX and MIN values for integers
    const INT_MAX = 2147483647;
    const INT_MIN = -2147483648;
    // Trimmed string
    str = str.trim();
    // Counter
    let i = 0;
    // Flag to indicate if the number is negative
    const isNegative = str[0] === '-';
    // Flag to indicate if the number is positive
    const isPositive = str[0] === '+';
    if (isNegative) {
        i++;
    } else if (isPositive) {
        i++;
    }
    // This will store the converted number
    let number = 0;
    // Loop for each numeric character in the string iff numeric characters are leading
    // characters in the string
    while (i < str.length && str[i] >= '0' && str[i] <= '9') {
        number = number * 10 + (str[i] - '0'); //str[i] - '0'====> convert into a number
        i++;
    }
    
    // Give back the sign to the converted number
    number = isNegative ? -number : number;
    if (number < INT_MIN) {
        return INT_MIN;
    }
    if (number > INT_MAX) {
        return INT_MAX;
    }
    return number;
}

console.log(myAtoi("4193 with words"))