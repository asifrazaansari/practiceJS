const array = [1,8,2,4,9]

function largestSumPair(array) {
    let largest = array[0], secondLargest = array[0]

    for (let i = 1; i < array.length; i++) {
        if (array[i] > largest) {
            secondLargest = largest
            largest = array[i]
        } else if (array[i] > secondLargest && array[i] < largest) {
            secondLargest = array[i]
        }
    }
    return largest + secondLargest
}

console.log(largestSumPair(array))

