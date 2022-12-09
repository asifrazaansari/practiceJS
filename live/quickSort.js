const arr = [5, 6, 7, 8, 9, 361, 45, 62]

function partition(arr, left, right){
    function swap(arr, left, right){
        let temp = arr[left]
        arr[left] = arr[right]
        arr[right] = temp
    }

    let pivotEle = arr[right]
    let swapInd = left - 1

    for(let i = left; i<right; i++){
        if(arr[i] < pivotEle){
            swapInd++
            swap(arr, swapInd, i)
        }
    }
    swap(arr, swapInd + 1, right)
    return swapInd + 1
}

function quickSort(arr, left = 0, right = arr.length - 1){
    if(left < right){
        let pivotIndex = partition(arr, left, right)

        quickSort(arr, left, pivotIndex - 1)
        quickSort(arr, pivotIndex + 1, right)
    }

    return arr
}

console.log(quickSort(arr))