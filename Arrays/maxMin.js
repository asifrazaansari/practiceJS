const arr = [5,4,-1,7,8]

function maxMin(arr){
    let max = arr[0], min = arr[0]

    for(let i=1; i<arr.length; i++){
        if(arr[i] > max){
            max = arr[i]
        }else{
            min = arr[i]
        }
    }
    return [max, min]
}

console.log(maxMin(arr))