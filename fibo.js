function fibo(n){
    if (n <= 2) return 1
    return fibo(n-1) + fibo(n-2)
}

//console.log(fibo(50))

function mul(arr){
    if(arr.length === 0) return 1
    return arr.pop() * mul(arr)
}

console.log(mul([1,2,3,4]))