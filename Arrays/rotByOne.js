// Cyclically rotate an array by one

function rotByOne(arr) {
    const last = arr[arr.length - 1]

    for (let i = arr.length - 2; i >= 0; i--) {
        arr[i+1] = arr[i]
    }
    arr[0] = last
    return arr
}

console.log(rotByOne([1, 2, 3, 4, 5]))