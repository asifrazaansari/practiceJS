// function ReplaceElements(arr)
// {
//     let max_ele = arr[0];
//     arr[0] = -1;
 
//     for (let i = 1; i < arr.length; ++i) {

//         if (max_ele > arr[i])
//             arr[i] = max_ele;
 

//         else if (max_ele <= arr[i]) {
//             let temp = arr[i];
//             arr[i] = max_ele;
//             max_ele = temp;
//         }
//     }return arr
// }

// console.log(ReplaceElements([4, 5, 2, 1, 7, 6]))

// function count(arr){
//     let count = 0;
//     for(let i=0; i<arr.length; i++){
//         if((arr[i]+ arr[i+1] === (i + i+1)))
//             count++
//     }
//     return count
// }

// console.log(count([1,0,3,2]))

function CountPairs(arr)
{
    let count = 0;
  
    // Generate all possible pairs and increment
    // the count if the condition is satisfied
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if ((i + j) == (arr[i] + arr[j]))
                count++;
        }
    }
    return count;
}

console.log(CountPairs([1,0,3,2]))