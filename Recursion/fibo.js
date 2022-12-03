function fibo(n){
    if(n === 0) return 0
    else if (n === 1 || n === 2) return 1
    return fibo(n-1) + fibo(n-2)
}

console.log(fibo(5))

function mul(arr){
    if(arr.length === 0) return 1
    return arr.pop() * mul(arr)
}

//console.log(mul([1,2,3,4]))