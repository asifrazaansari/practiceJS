const frequencySort = function (s) {
    const map = new Map()
    let result = ""

    for (let i = s.length - 1; i >= 0; i--) {
        if (map.has(s[i])) {
            map.set(s[i], map.get(s[i]) + 1)
        }
        else {
            map.set(s[i], 1)
        }
    }

    const sortedString = new Map([...map.entries()].sort((a, b) => b[1] - a[1]));

    for (const str of sortedString) {
        if (str[1] > 1) {
            let k = str[1]
            while (k > 0) {
                result += str[0]
                k--
            }
        } else {
            result += str[0]
        }
    }
    return result
}
console.log(frequencySort("raaeaedere"))

/*
 var frequencySort = function(s) {
    const mapChars = s.split('').reduce((acc, ch) => {
        acc[ch] = (acc[ch] || 0) + 1;
        return acc;
    }, {})
   const sortedChars = Object.entries(mapChars).sort((a, b) => b[1] - a[1]);
   return sortedChars.reduce((acc, [ch, count]) => {
       acc += ch.repeat(count);
       return acc;
   }, '')
    
};
*/