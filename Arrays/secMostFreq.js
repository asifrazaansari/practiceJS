let NO_OF_CHARS = 256;

// finds the second most frequently
// occurring char
function getSecondMostFreq(str) {

    // count number of occurrences of every
    // character.
    let count = new Array(NO_OF_CHARS);
    count.fill(0);

    for (let i = 0; i < str.length; i++)
        (count[str[i].charCodeAt()])++;

    // Traverse through the count[] and find
    // second highest element.
    let first = 0, second = 0;

    for (let i = 0; i < NO_OF_CHARS; i++) {

        /* If current element is smaller
        than first then update both first
        and second */
        if (count[i] > count[first]) {
            second = first;
            first = i;
        }

        /* If count[i] is in between first
        and second then update second */
        else if (count[i] > count[second] &&
            count[i] != count[first])
            second = i;
    }

    return String.fromCharCode(second);
}


console.log(getSecondMostFreq("aaabbcccc"))

