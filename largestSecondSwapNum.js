/*
const array = [2, 9, 18, 20, 56, 25];

function largestNum(array) {
    let arr = 0;
    for (let i = 0; i < array.length; i++) {
        if (arr < array[i]) {
            arr = array[i]
        }

    }
    return arr
}

//console.log(largestNum(array))

const arr = [2, 20, 18, 3, 35, 4];
function secondLargest(arr) {
    for (i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
                // let temp = arr[i]
                // arr[i] = arr[j]
                // arr[j] = temp
                arr[i] = arr[i] + arr[j]
                arr[j] = arr[i] - arr[j]
                arr[i] = arr[i] - arr[j]
            }
        }
    }
    let secondlarg = arr[arr.length - 2]
    return secondlarg
}
//console.log(secondLargest(arr))


const num = [9, 7, 4, 3, 8, 1, 2]
function manipulatingNum(ind, num) {
    //         let cutArray = num.slice(0,ind)
    //         num = num.slice(ind)
    //         let final = num.concat(cutArray)
    //         console.log(final)
    let cutArray = [];
    let remArray = [];
    let finalArray = [];
    for (let i = 0; i < num.length; i++) {
        if (i < ind) {
            cutArray.push(num[i])
        }
        if(i>=ind){
            remArray.push(num[i])
        }
        [...finalArray] = [...remArray,...cutArray]
    }
    return finalArray
}
console.log(manipulatingNum(2, num))
*/
// another method
/*
const array1 = [1,9,5,7,3]
let k = 2;
let i= 0;
let j = array1.length -1;
while(k){
    while(i != j){
        let temp = array1[i];
        array1[i] = array1[i+1]
        array1[i+1] = temp
        i++
    }
    i = 0;
    k--;
}
console.log(array1)
*/
const num = [9, 7, 4, 3, 8, 1, 2]
function manipulatingNum(ind, num) {
    let cutArray = [];

    for (let i = 0; i < ind; i++) {
        cutArray.push(num[i])
        num = num.unshift()
    }
    const finalArray = [...num, ...cutArray]

    return finalArray
}
console.log(manipulatingNum(2, num))
