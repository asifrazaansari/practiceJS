const arr = [5, 6, 7, 2, 5, 9, 7, 1, 3, 4, 5, 69, 7, 14, 1, 0]

function insertionSort(arr) {

        for (let i = 1; i < arr.length; i++) {
                let key = arr[i]
                let j = i - 1

                while (j >= 0 && arr[j] > key) {
                        arr[j + 1] = arr[j]
                        j--
                }
                arr[j + 1] = key
        }

        return arr
}


console.log(insertionSort(arr))