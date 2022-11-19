function pow(n){
    //if(n==1) return true
    //if(n%2!==0 || n<=0) return false
    //return pow(n/2)
    return Number.isInteger(Math.log2(n))
}


console.log(pow(24))