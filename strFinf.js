let str1 = "Code Zinger University"
let str2 = "Zinger"


// function solution(str1, str2){
//     let i=0
//     let j=0
//     while(str2[j] < str2.length){
//         while(str1[i] === str2[j]){
//             i++
//             j++
//         }
//         i++
//         j=0
//     }
//     return i
// }

// console.log(solution(str1, str2))

var lengthOfLongestSubstring = function(s) {
    var k = 0;
    var maxLength = 0;
    for(let i = 0; i < s.length; i++) { // for each i
        for (let j = k; j < i; j++) { // for each j = k
            if (s[i] === s[j]) { // for that substring, if u see same char
                k = j + 1; // try new k value just after the j
                // since there is NO way , anything before j + 1 can yield u a better answer
                // if we think of k as a extremity to i,
                // any index bound between (k,i) cannot do better than (k,i)!
                break;
            }
        }
        
        // attempt to update maxLength
        // - k to account for start point
        // - 1 account for 0 index
        if (i - k + 1 > maxLength) {
            maxLength = i - k + 1;
        }
    }
    return maxLength;
    
};

console.log(lengthOfLongestSubstring("abcabcab"))