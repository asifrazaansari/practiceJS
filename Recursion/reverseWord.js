// function reverseWord(str){
//     let start  = 0 
//     let end = str.length - 1

//     while(start < end){
//         str[start] = str[start] + str[end]
//         str[end] = str[start] - str[end]
//         str[start] = str[start] - str[end]
//         start++
//         end--
//     }
//     return str
// }

// console.log(reverseWord([1,2,3,4,5]))

// function reverseString(str){
//     for(let i=str.length - 1; i>=0; i--){
//         str += str[i]
//     }
//     return str.slice(str.length/2)
// }

//console.log(reverseString("hello"))

function recurReverse(str) {
    if (str.length <= 1) return str
    return recurReverse(str.slice(1)) + str[0]
}

//console.log(recurReverse("hello"))


// var reverseString = function(s) {
//     let res = []
//     if (s.length <= 0) return res
//     res.push(s[s.length - 1])
//     let ans = res.concat(reverseString(s.slice(0, -1)))
//     return ans
// };


//console.log(reverseString(["h", "l", "l", "6"]))

let reverseArray = (arr) => {
    //If the length is 0 
    //then return an empty array
    if (arr.length === 0) {
        return [];
    }

    //Call the function recursively with one element less and so on.
    return [arr.pop()].concat(reverseArray(arr));
}

const reverseString = function (s) {

    //If the length is 0 
    //then return an empty array
    if (s.length === 0) {
        return []
    }

    //Call the function recursively with one element less and so on.
    return [s.pop()].concat(reverseString(s));
}

