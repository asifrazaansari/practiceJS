
var longestSubstring = function (s, k) {

    return helper(0, s.length)

    function helper(start, end) {
        let map = {};

        for (let i = start; i < end; i++) {
            map[s[i]] = (map[s[i]] || 0) + 1;
        }

        for (let i = start; i < end; i++) {
            if (map[s[i]] < k) {
                let left = helper(start, i);
                let right = helper(i + 1, end);
                return Math.max(left, right)
            }
        }
        return end - start;

    }
}


const longestSubstring = function (s, k) {
    const map = new Map()

    for (const str of s) {
        if (map.has(str)) {
            map.set(str, map.get(str) + 1)
        } else {
            map.set(str, 1)
        }
    }

    let length = 0
    for (const len of map) {
        if (len[1] >= k) {
            length += len[1]
        }
    }
    return length
}