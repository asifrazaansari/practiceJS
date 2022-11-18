const arr = ["hi", "hello"]
function captialFirst(arr){
    for(let i=0; i<arr.length; i++){
        arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1,)
    }
    return arr
}
console.log(captialFirst(arr))