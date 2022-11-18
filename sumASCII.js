function sumASCII(str, k){
    let count = 0, result = 0
    for(let i=0; i<k; i++){
        result += str[i].charCodeAt()
    }
    if(result % k === 0) count++

    for(let i=k; i<str.length; i++){
        result += str[i].charCodeAt()
        result -= str[i - k].charCodeAt()
        if(result % k === 0) count++
    }
    return count
}

console.log(sumASCII("bcgabc"), 3)