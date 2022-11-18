// function rotateArray(array, value) {
//     let rotateArray = ""
//     if (value <=array.length) {
//         for (let i = array.length - value; i < array.length; i++) {
//             rotateArray += " " + array[i]
//         }
//         for (let i = 0; i < array.length - value; i++) {
//             rotateArray += " " + array[i]
//         }
//     }else {
//         for (let i = 0; i < array.length; i++) {
//             rotateArray += " " + array[i]
//         }
//     }
//     return rotateArray.trim()
// }



/*
function rotateArray(arr, k) {
    k = k % arr.length
    let final = []
    let c = []
    for (let i = 0; i < arr.length; i++) {
        if (i < k) {
            final.unshift(arr.pop())
        } else {
            c = [...final, ...arr]
        }
    }
    return c.join(" ")
}
//console.log(rotateArray([1, 3, 5, 7, 9, 11], 20))


function primeNumber(arr) {
    let b = ""
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 1 || arr[i] === 2) {
            b += " " + arr[i]
        }
        if (arr[i] > 2 && arr[i] % i !== 0) {
            b += " " + arr[i]
        }
    }
    return b
}

// console.log(primeNumber([2, 3, 4, 5, 7, 9, 16]))

// let numArray = [ 2, 3, 4, 5, 6, 7, 8, 9, 10]

// numArray = numArray.filter((number) => {
//   for (let i = 2; i <= Math.sqrt(number); i++) {
//     if (number % i === 0) return false;
//   }
//   let c = [...numArray, numArray]
//   return c;
// });

// console.log(numArray);


function primeNumber(array) {
    let primeNumbers = ""
    array.forEach((element) => {
        let factor = 0;
        for (let i = 0; i <= element; i++) {
            if (element % i === 0) {
                factor++
            }
        }
        if (factor === 2) {
            primeNumbers += " " + element
        }
    })
    return primeNumbers.trim()
}
//console.log(primeNumber([2, 3, 4, 5, 7, 9, 16]))

*/
function anagram(str1, str2) {
    if (str1.length !== str2.length) return false
    const obj = {}
    for (let i = 0; i < str1.length; i++) {
        if (obj[str1[i]]) {
            obj[str1[i]] += 1
        } else {
            obj[str1[i]] = 1
        }
    }
    for (let j = 0; j < str2.length; j++) {
        if (obj[str2[j]]) {
            obj[str2[j]] -= 1
        } else {
            return false
        }
    }
    return true
}

console.log(anagram("hEctare", "teacher"))