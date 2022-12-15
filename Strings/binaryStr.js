
function maxSubStr(str) {

    // To store the count of 0s and 1s
    let count0 = 0, count1 = 0;

    // To store the count of maximum
    // substrings str can be divided into
    let cnt = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] == '0') {
            count0++;
        }
        else {
            count1++;
        }
        if (count0 == count1) {
            cnt++;
        }
    }

    // It is not possible to
    // split the string
    if (count0 != count1) {
        return -1;
    }

    return cnt;
}



console.log(maxSubStr("0100110101"));
