//Distance between two closest minimum
//Given an array of integers, find the minimum distance between any two occurrences of the minimum integer in the array.
const arr = [5, 1, 2, 3, 4, 1, 2, 1]

function closestMin(arr) {
    let index = []
    let min = Number.MAX_VALUE
    let minDist = Number.MAX_VALUE
    for(let ind in arr){
        if(arr[ind] <= min){
            min = arr[ind]
        }
    }
    for(let i=0; i<index.length; i++){
        if((index[i] - index[i - 1]) < minDist){
            minDist = index[i] - index[i-1]
        }
    }
    return minDist
}

console.log(closestMin(arr))