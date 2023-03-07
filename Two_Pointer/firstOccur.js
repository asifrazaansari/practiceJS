const haystack = "mississippi", needle = "issip"


// const strStr = function(haystack, needle) {
//     let haystackPointer = 0, needlePointer = 0

//     //let firstOccur = -1

//     while(haystackPointer < haystack.length){
//         if(haystack[haystackPointer] === needle[needlePointer]){
//             haystackPointer++
//             needlePointer++
//             if(needlePointer === needle.length){
//                 return haystackPointer - needlePointer
//             }
//         }else if(haystack[haystackPointer] !== needle[needlePointer]){
//             haystackPointer++
//             needlePointer = 0
//         }
//     }

//     return -1
// };

var strStr = function(haystack, needle) {
    if (!needle) return 0
    let idx = 0
    for (let i = 0; i < haystack.length; i++) {
      if (haystack[i] != needle[idx]) {
        i = i-idx
        idx = 0
      } else {
        if (idx == needle.length-1) return i-idx
        idx++
      }
    }
    return -1
  };


  const strStr = (haystack, needle) => {
    if (needle === '' || needle === haystack) return 0;    // the only mandatory check here is (needle === '')
    if (haystack.length < needle.length) return -1;        // the other ones are for efficiency
    
    for (let i = 0; i < haystack.length - needle.length + 1; i++) {    // start looping through haystack until the remaining substring is shorter than needle
      if (haystack[i] === needle[0]) {                // as soon as we see a character that matches the first character of needle
        for (let j = 0; j < needle.length; j++) {     // start looping through both needle and haystack
          if (needle[j] !== haystack[i + j]) {        // as soon as the characters don't match
            break;                                    // break out of the loop and return to looping through haystack
          } else if (j === needle.length - 1){        // otherwise, if we looped through the entire needle and all of the characters matched
            return i;                                 // return the index of the first character of haystack with which we started the loop
          }
        }
      }
    }
    
    return -1;                                        // return -1 if there wasn't a match
  };


console.log(strStr(haystack, needle))