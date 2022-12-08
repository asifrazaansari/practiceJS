const num = 2;
/*
let isPime = true;

for(let i=2; i<num; i++){
    if(num === 2){
        isPime;
        break;
    }else if(num % i === 0){
        isPime = false;
        break;
    }
}

if (isPime){
    console.log( "It is a prime number")
} else{
    console.log( "It is not a prime number")
}





 var countPrimes = function (n) {
    let isPrime = new Array(n).fill(true);
    isPrime[1] = false;
    for (let i = 2; i * i < n; i++) {
        if (!isPrime[i]) continue;
        for (let j = i * i; j < n; j += i) isPrime[j] = false;
    }
    let count = 0;
    for (let i = 1; i < n; i++) {
        if (isPrime[i]) count++;
    }
    return count;
};
*/


function isPrime(a) {
    if (a < 2) return `${a} is not a prime number`
    for (let i = 2; i*i <= a; i++) {
        if (a % i === 0) return `${a} is not a prime number, it is divisible by ${i}`
    }
    return `${a} is a prime number`
}

//console.log(isPrime(6667))

const a = 10
function allPrime(a) {
    if (a < 2) return 0
    for (let i = 2; i*i <= a; i++) {
        if (a % i === 0) return 0
    }
    return a
}

function countPrimes(a){
    const arr = []
    for(let i = 2; i <=a; i++){
        if(allPrime(i)) arr.push(i)
    }
    return arr
}

console.log(countPrimes(a))