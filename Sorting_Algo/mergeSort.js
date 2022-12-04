const arr = [5,6,7,8,9,361,45,62]
/*
function conquer(arr, startInd, endInd){
    const merged = new Array(endInd - startInd + 1)

    let indx1 = startInd
    let indx2 = mid+1
    let x = 0

    while(indx1 <= mid && indx2 <= endInd){
        if(arr[indx1] <= arr[indx2]){
            merged[x++] = arr[indx1++]
        }else{
            merged[x++] = arr[indx2++]
        }
    }

    while(indx1 <= mid){
        merged[x++] = arr[indx1++]
    }

    while(indx2 <= endInd){
        merged[x++] = arr[indx2++]
    }

    let j =startInd
    for(let i=0; i<merged.length; i++){
        arr[j] = merged[i]
        j++
    }
}

function divide(arr, startInd, endInd){
    if(startInd >= endInd) return 

    let mid  = Math.floor(startInd - (endInd - startInd)/2)
    divide(arr, startInd, mid)
    divide(arr, mid+1, endInd)
    conquer(arr, startInd, mid, endInd)
}
*/

function merge(arr1, arr2){
    const result  = []

    let arr1Ind = 0
    let arr2Ind = 0

    while(arr1Ind < arr1.length && arr2Ind < arr2.length){
        if(arr2[arr2Ind] > arr1[arr1Ind]) result.push(arr1[arr1Ind++])
        else result.push(arr2[arr2Ind++])
    }

    while(arr1Ind < arr1.length) result.push(arr1[arr1Ind++])

    while(arr2Ind < arr2.length) result.push(arr2[arr2Ind++])

    return result
}

function mergedSort(arr){
    if(arr.length <= 1) return arr

    let mid = Math.floor(arr.length/2)
    let left = mergedSort(arr.slice(0, mid))
    let right = mergedSort(arr.slice(mid))

    return merge(left, right)
}

console.log(mergedSort(arr))