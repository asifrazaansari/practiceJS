let a = 5, b = 10
a = a + b
b = a - b
a = a - b
//console.log(a, b)

let x = "asif", y = "raza"

x = x + y
y = x.substring(0, y.length)
x = x.substring(y.length)
//console.log(x, y)


//reverse an array

const arr = [1, 2, 3, 4, 56, 78]

let start = 0, end = arr.length - 1

while (start < end) {
    // arr[start] = arr[start] + arr[end]
    // arr[end] = arr[start] - arr[end]
    // arr[start] = arr[start] - arr[end]
    [arr[start], arr[end]] = [arr[end], arr[start]]
    start++
    end--
}
//console.log(arr)

// rotate an array



const arr1 = [1, 2, 3, 4, 5, 6]
let num = 5
const temp = num
function rotateArray(arr1, num) {
    if(arr1.length < num) return "Invalid range"
    let start = 0
    let end = arr1.length - 1
    while (start < end) {
        [arr1[start], arr1[end]] = [arr1[end], arr1[start]]
        start++
        end--
    }
    //console.log(arr1)
    start = 0, num = num - 1
    while (start < num) {
        arr1[start] = arr1[start] + arr1[num]
        arr1[num] = arr1[start] - arr1[num]
        arr1[start] = arr1[start] - arr1[num]
        start++
        num--
    }
    start = temp, end = arr1.length - 1
    //console.log(start, end)
    while(start < end){
        [arr1[start], arr1[end]] = [arr1[end], arr1[start]]
        start++
        end-- 
    }
    return arr1
}
//console.log(rotateArray(arr1, num))

//Given an array of repeated elements return the most repeated element from the array

const arr2 = []