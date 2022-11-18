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

function reverseString(str){
    for(let i=str.length - 1; i>=0; i--){
        str += str[i]
    }
    return str.slice(str.length/2)
}

//console.log(reverseString("hello"))

function recurReverse(str){
    if(str.length <= 1) return str
    return recurReverse(str.slice(1)) + str[0]
}

console.log(recurReverse("hello"))



