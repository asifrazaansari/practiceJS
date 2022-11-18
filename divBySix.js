function count(str){
    let count = 0;
    str = str.split("")
    for(let i=0; i<str.length; i++){
        for(let j=i+1; j<str.length; j++){
            if((str[i] + str[j])%6 ==0){
                count++
            }
        }
    }
    return count
}

console.log(count("612313412342123"))