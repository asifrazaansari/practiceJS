const arr = [5, 6, 7, 2, 5, 9, 7, 3, 4, 5, 69, 7, 14]


function partition (arr, left, right){
    function swap(arr, left, right){
        let temp = arr[left]
        arr[left] = arr[right]
        arr[right] = temp
    }

    let pivotEle = arr[right]
    let swapInd = left - 1

    for(let i=left; i<right; i++){
        if(arr[i] < pivotEle){
            swapInd++
            swap(arr, swapInd, i)
        }
    }
    swap(arr, swapInd + 1, right)
    return swapInd + 1
}


function quickSelect(arr, left = 0, right = arr.length - 1,k){
    let resultIndex = arr.length - k

    while(left < right){
        let pivotIndex = partition(arr, left, right)
        if(resultIndex === pivotIndex){
            return arr[pivotIndex]
        }
        if(resultIndex < pivotIndex){
            right = pivotIndex - 1
        }else{
            left = pivotIndex + 1
        }
    }
    return arr[left]
}

console.log(quickSelect(arr, left = 0, right = arr.length - 1, 3))
