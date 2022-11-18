// function missingCharac(str) {
//     const arr = new Array(26).fill(false)
//     const charsList = []
//     for (let i = 0; i < str.length; i++) {
//         if ('a'.charCodeAt() <= str[i].charCodeAt() && str[i].charCodeAt() <= 'z'.charCodeAt())
//             arr[str[i].charCodeAt() - 'a'.charCodeAt()] = true

//         else if ('A'.charCodeAt() <= str[i].charCodeAt() && str[i].charCodeAt() <= 'Z'.charCodeAt())
//             arr[str[i].charCodeAt() - 'A'.charCodeAt()] = true

//     }
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === false) {
//             charsList.push(String.fromCharCode(i + 'a'.charCodeAt()))
//         }
//     }
//     return charsList.join("")
// }


// console.log(missingCharac("The quick brown fox jumps"))

function missingCharac(str) {
    let arr = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    for(let i = 0; i < str.length; i++) {
        let index = arr.indexOf(str[i].toLowerCase())
        if(index > -1) {
            arr.splice(index, 1);
        }
    }
    return arr.join("")
}


console.log(missingCharac("The quick brown fox jumps"))

