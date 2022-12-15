// function lonelyinteger(a) {
//     const  result = {}
//     for(let i=0; i<a.length; i++){
//         result[a[i]] = (result[a[i]] || 0) + 1
//     }
//     for(let i=0; i<a.length; i++){
//         if(result[i] === 1){
//             return i
//         }
//     }
    
// }
// console.log(lonelyinteger([1]))

function lonelyinteger(arr) {
    let result = 0
    for(let i=0; i<arr.length; i++){
     result ^= arr[i]
    }
    return result
 }
 
 console.log(lonelyinteger([1,1,2,3,3,4,4,9,2]))