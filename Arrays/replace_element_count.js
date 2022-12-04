// function replaceElementsCount(arr){
//     let count = 0
//     const result = []
//     for(let i=0; i<arr.length; i++){  
//         for(let j=0; j<arr.length; j++){
//             if(arr[i] === arr[j]) 
//                 count++
//         }
//         result.push(count)
//         count = 0
//     }
//     return result
// }
// //1 3 2 3 3 2
// console.log(replaceElementsCount([1, 2, 5, 2, 2, 5]))


function countDistinctPair(arr) {
    let count = 0
    const obj = {}
    for (let i = arr.length - 1; i>=0; i--) {
        for(let j = 0; j<arr.length; j++){
            if(obj[arr[i] + arr[j]]){
                continue;
            }else{
                //result.push((arr[i] + arr[j]))
                obj[arr[i] + arr[j]] = 1
            }
            
        }
    }
    for(let i = 0; i<arr.length; i++){
       if(obj[arr[i]]){
        count++
       }
    }
    return count
}
console.log(countDistinctPair([1, 5, 6, 4, -1, 5, 10]))

