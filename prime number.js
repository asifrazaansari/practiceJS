const num = 2;
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