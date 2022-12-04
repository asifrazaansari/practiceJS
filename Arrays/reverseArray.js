const array = [2,9,4,3,5,6];

// function minNum(array){
//     let min = 0;
//     for (let i in array){
//         if (array[i] > min){
//             min  =array[i]
//         }
//     }
//     return min
// }

// console.log(minNum(array))

// reverse an array

function reverseArray(array){
    let arr = [];
    for (let i=array.length -1; i>= 0; i--){
        arr += array[i]
        // arr.push(array[i])
    }
    return arr
}
console.log(reverseArray(array))
