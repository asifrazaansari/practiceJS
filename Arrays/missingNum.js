// Create a method that finds the missing number’s from the given integer array of 1 to 10
// Given Array = {1,2,3,6,7,8,4,10}


function missingNumber(arr) {
    let res = []
    let max = Math.max(...arr)
    for (let i = 1; i < max; i++) {
        if (!arr.includes(i)) res.push(i)
    }
    return res
}


//let arr = [10, 2, 3, 6, 7, 8, 4, 1]

//console.log(missingNumber(arr))


function printMissingElements(arr, N) {
    let cnt = 0, result = []
    for (let i = 1; i <= arr[N - 1]; i++) {
        if (arr[cnt] == i) {
            cnt++;
        }
        else {
           result.push(i)
        }
    }
    return result
}

const arr = [6, 7, 10, 11, 13];
let N = arr.length;

console.log(printMissingElements(arr, N))


