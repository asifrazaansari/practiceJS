const words = ["abca","acba","cdef","defc","eeequ", "a"]

const removeAnagrams = function(words) {
    const result = []
    for(let i in words){
        if(words[i] === "") continue
        if(words[i].length === 1){
            result.push(words[i])
        }else{
            const obj = {}
            let find = words[i]
            for(let j=0; j<find.length; j++){
                obj[find[j]] = (obj[find[j]] || 0) +1
            }
            let findIn = words[i+1]
            for(let j=0; j<findIn.length; j++){
                if(obj[findIn[j]]) obj[findIn[j]]--
                else result.push(find)
            }
            result.push(findIn)
        }
        i+=2
    }
    return result
}

console.log(removeAnagrams(words))


// var removeAnagrams = function(words) {
//     var retArray = [];
//     elem = words[0];
//     retArray.push(elem);
//     for(let i=1;i<words.length;i++){
//         // var str = words[elem];
//         if(elem.length != words[i].length){
//             retArray.push(words[i]);
//             elem = words[i];
//         }
//         else{
//         let obj = {};
//         for(let i=0;i<elem.length;i++){
//             let char = elem[i];
//             if(obj[char] > 0)
//                 obj[char]++;
//             else
//                 obj[char] = 1;
//         }
//         let findIn = words[i];
//         for(let j=0;j<words[i].length;j++){
//             let char = words[i][j];
//             if(obj[char] > 0)
//                 obj[char]--;
//             else{
//                 retArray.push(words[i]);
//                 break;
//             }
//         }
//         elem = words[i];
//     }
//    }
//     return retArray;
// };

// const removeAnagrams = function(words,arr=[words[0]]) {
//     for(let q=0;q<words.length-1;q++){
//         if(words[q].split('').sort().join('') != words[q+1].split('').sort().join('')) arr.push(words[q+1])
//     }
//     return arr
// }

//console.log(removeAnagrams(words))

// const removeAnagrams = function(words) {
//     const result = []
//     let ele = words[0]
//     result.push(ele)
//     for(let i=1; i<words.length; i++){
//         if(words[i] === "") continue
//         else if(words[i].length === 1 || ele.length !== words[i].length){
//             result.push(words[i]) 
//             ele = words[i]
//         }else{
//             const obj = {}
//             for(let i=0; i<ele.length; i++){
//                 let find = ele[i]
//                 obj[find] = (obj[find] || 0) + 1
//             }
//             let findIn = words[i]
//             for(let j=0; j<findIn.length; j++){
//                 if(obj[findIn[j]]) obj[findIn[j]]--
//                 else{
//                     result.push(findIn)
//                     break
//                 } 
//             }
//             ele = words[i]
//         }
//     }
//     return result
// }

// console.log(removeAnagrams(words))