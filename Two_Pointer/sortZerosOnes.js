let sor = [1,1,1,1,1,1,1,1,0,1,0,1,0,1,1,1,0,0,0,0,1]

function sortingNumber(arr){
    let l = arr.length-1
    let r = 0
    while(r<l){
        if(arr[r]==1){
            arr[r]=arr[l]
            arr[l]=1
            l--
        }else r++
    }
    return arr
}

console.log(sortingNumber(sor))