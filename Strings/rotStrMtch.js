function strMatch(str1, str2){
    let str = str1 + str1

    let count = 0
    for(let i=0, j=0; i<str.length; i++){ //motamota
        if(str[i] === str2[j]){
            count++
            j++
        }
    }
    if(count === str2.length) return true
    return false
}

console.log(strMatch("mota", "tamo"))