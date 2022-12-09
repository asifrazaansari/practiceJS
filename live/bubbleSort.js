const arr = [5, 6, 7, 2, 5, 9, 7, 1, 3, 4, 5, 69, 7, 14, 1, 0]


function bubbleSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {

        let isSwapped = false
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                arr[j] = arr[j] + arr[j + 1]
                arr[j + 1] = arr[j] - arr[j + 1]
                arr[j] = arr[j] - arr[j + 1]
                isSwapped = true
            }
        }

        if (isSwapped === false) break
    }

    return arr
}

console.log(bubbleSort(arr))