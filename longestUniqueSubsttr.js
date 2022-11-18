function longestUniqueSubsttr(str) {
    let res = 0;
    const visited = new Array(256)

    for (let i = 0; i < str.length; i++) {
        for (let j = i; j < str.length; j++) {

            // If current character is visited
            // Break the loop
            if (visited[str.charCodeAt(j)] == true)
                break;

            // Else update the result if
            // this window is larger, and mark
            // current character as visited.
            else {
                res = Math.max(res, j - i + 1);
                visited[str.charCodeAt(j)] = true;
            }
        }
    }
    return res
}

console.log(longestUniqueSubsttr("pwwkew"))