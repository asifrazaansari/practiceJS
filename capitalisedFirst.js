const arr = ["hi", "hello"]
function captialFirst(arr){
    const result = []
    // for(let i=0; i<arr.length; i++){
    //     arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1,)
    // }
    // return arr

    if(arr.length === 1) return arr
    return  arr[0] = arr[0][0].toUpperCase() + arr[0].slice(1,) + captialFirst(arr.slice(1,))
}
//console.log(captialFirst(arr))

let i = 0
const cap = (arr) => {
    if(i == arr.length) return arr
    arr[i] = arr[i][0].toUpperCase() + arr[i].substring(1,)
    i++
    return cap(arr)
}

console.log(cap(arr))