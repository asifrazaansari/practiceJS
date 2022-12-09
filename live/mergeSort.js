const arr = [5, 6, 7, 8, 9, 361, 45, 62]




function merge(arr1, arr2) {
    const result = []

    let arr1Ind = 0
    let arr2Ind = 0

    while (arr1Ind < arr1.length && arr2Ind < arr2.length) {
        if (arr2[arr2Ind] > arr1[arr1Ind]) result.push(arr1[arr1Ind++])
        else result.push(arr2[arr2Ind++])
    }


    while(arr1Ind < arr1.length) result.push(arr1[arr1Ind++])
    while(arr2Ind < arr2.length) result.push(arr2[arr2Ind++])

    return result
}

function mergedSort(arr) {
    if (arr.length <= 1) return arr

    let mid = Math.floor(arr.length / 2)
    let left = mergedSort(arr.slice(0, mid))
    let right = mergedSort(arr.slice(mid))

    return merge(left, right)
}


console.log(mergedSort(arr))