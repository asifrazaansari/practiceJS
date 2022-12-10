let MAX_CHAR = 26;

// Function to check both halves
// for equality
function checkCorrectOrNot(s) {

    // Counter array initialized with 0
    let count = new Array(MAX_CHAR);
    for (let i = 0; i < count.length; i++) {
        count[i] = 0;
    }

    // Length of the string
    let n = s.length;
    if (n == 1)
        return true;

    // Traverse till the middle element
    // is reached
    for (let i = 0, j = n - 1; i < j; i++, j--) {

        // First half
        count[s[i] - 'a']++;

        // Second half
        count[s[j] - 'a']--;
    }

    // Checking if values are different
    // set flag to 1
    for (let i = 0; i < MAX_CHAR; i++)
        if (count[i] != 0)
            return false;

    return true;
}


console.log(checkCorrectOrNot("abcaabbc"))