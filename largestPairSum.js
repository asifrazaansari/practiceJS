// const array = [100000, 200000, 5667, 677876, 454556, 68985, 908665, 56678, 567877, 9087655]

// function largestSumPair(array) {
//     let largest, secondLargest
//     if (array[0] > array[1]) {
//         largest = array[0]
//         secondLargest = array[1]
//     } else {
//         secondLargest = array[0]
//         largest = array[1]
//     }

//     for (let i = 2; i < array.length; i++) {
//         if (array[i] > largest) {
//             secondLargest = largest
//             largest = array[i]
//         } else if (array[i] > secondLargest && array[i] < largest) {
//             secondLargest = array[i]
//         }
//     }
//     return largest + secondLargest
// }

// console.log(largestSumPair(array))

