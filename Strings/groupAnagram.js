// const strs = ["eat","tea","tan","ate","nat","bat"]
// const groupAnagrams = function(strs) {
//     const groups = {};
//     for(let str of strs) {
//         const key = str.split("").sort()
//         if(key in groups) {
//             groups[key].push(str);
//         }
//         else {
//             groups[key] = [str];
//         }
//     }
//     console.log(groups)
//     return Object.values(groups);
// }

// console.log(groupAnagrams(strs))

function isAnagram(a, b) {
    if (a.length !== b.length) return "NO"
    const obj = {}

    for (const str1 of a) {
        obj[str1] = (obj[str1] || 0) + 1
    }

    for (const str2 of b) {
        if (!obj[str2]) return "NO"
        obj[str2] -= 1
    }
    return "YES"
}

console.log(isAnagram("b", "d"))