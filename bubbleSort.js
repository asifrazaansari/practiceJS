const arr = [5,6,7,2,5,9,7,1,3,4,5,69,7,14,1,0]

const bubbleSort = (arr) => {
    for(let i = 0; i<arr.length - 1; i++){
        for(let j = 0; j<arr.length - 1 - i; j++){
            if(arr[j] > arr[j + 1]){
                arr[j] = arr[j] + arr[j+1]
                arr[j+1] = arr[j] - arr[j+1]
                arr[j] = arr[j] - arr[j+1]
            }
        }
    }
    return arr
}

//console.log(bubbleSort(arr))

// improved bubble sort

const array = [1,2,3,4,5,6,7,8,9,10]

function improveBubbleSort(array){
    for(let i=0; i<array.length - 1; i++){
        let isSwapped = false
        for(let j=0; j<array.length - 1 - i; j++){
            if(array[j] > array[j+1]){
                array[j] = array[j] + array[j+1]
                array[j+1] = array[j] - array[j+1]
                array[j] = array[j] - array[j+1]
                isSwapped = true
            }
        }

        if(isSwapped === false) break
    }

    return array
}

console.log(improveBubbleSort(array))