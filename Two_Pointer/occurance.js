// function isAnagram(str1,str2){
// let obj={}    //{h:1,e:0,l:0,o:0}
// for(let item of str1){  //step 1
//  obj[item]=(obj[item]||0)+1
// }
// for(let ele of str2){
//   if(!obj[ele]){   //ele =>e,l,l,o,p
//     return false
//   }
//   obj[ele]=obj[ele]-1
// }
// return true
// }
// console.log(isAnagram("hello","elloh")) 



//max occurance of array  [1,2,3,4,1,8,2,1]  {1:3,2:2,3:1}
// function maxOcc(arr) {

//     let countFreq = {}
//     let maxOcured = 0
//     let maxNum = 0
//     for (let i = 0; i < arr.length; i++) {
//         countFreq[arr[i]] = (countFreq[arr[i]] || 0) + 1

//     }
//     for (let items in countFreq) {
//         if (countFreq[items] > maxNum) {
//             maxOcured = items
//             maxNum = countFreq[items]
//         }
//     }
//     return maxOcured
// }

// console.log(maxOcc([1, 2, 3, 7, 1, 6, 6, 9, 6]))

function isSqure(arr1, arr2) {
    if (arr1.length !== arr2.length) return false
    for (let i = 0; i < arr1.length; i++) {
        let isSqure = false
        for (let j = 0; j < arr2.length; j++) {
            if (arr1[i] * arr1[i] == arr2[j]) {
                isSqure = true
            }
            if (j == arr2.length - 1) {
                if (!isSqure) {
                    return false
                }
            }
        }
    }
    return true
}                                             //i       //j
//console.log(isSqure([1, 2, 3, 4], [1, 4, 9, 16]))

function square(arr1, arr2) {
    if (arr1.length !== arr2.length) return false
    for (let i = 0; i < arr1.length; i++) {
        arr1[i] = arr1[i] ** 2
        if (arr1[i] !== arr2[i]) return false
    }
    return true
}

//console.log(square([1, 2, 3, 4], [1, 4, 9, 16]))

const array = [-5, -4, -3, -2, 0, 2, 4, 6, 8]

function zeroSum(array){
    let lIndex = 0
    let rIndex = array.length - 1
    for(let i=0; i<array.length; i++){
        sum = array[lIndex] + array[rIndex ]
        if(sum === 0) return [array[lIndex], array[rIndex]]
        else if (sum>0) rIndex--
        else {
            lIndex++
            i = lIndex
        }
    }
}

console.log(zeroSum(array))


function sumArr(array){
    let left=0
    let right = array.length-1
    while(left < right){
        sum = array[left]+ array[right]
        if(sum === 0){
            return [array[left],array[right]]
        }else if(sum>0){
            right--
        }else {
            left++
        }
    }

}

//console.log(sumArr(array))



