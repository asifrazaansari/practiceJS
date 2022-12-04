function palindrome(str){
    for(let i=0; i<str.length/2; i++){
        if(str[i] !== str[str.length -1 -i]) return false
    }
    return true
}

//console.log(palindrome("refer"))

function recurPalindrome(str){
    if(str.length <= 1) return true
    // if(str[0] === str[str.length - 1]){
    //     return recurPalindrome(str.slice(1,str.length -1))
    // }else {
    //     return false
    // }
    return (str[0] == str.slice(-1) && recurPalindrome(str.slice(1,-1)))
}
//console.log(recurPalindrome("refer"))


function num(n){
    if( n===1) return n
    return num(n-1)
}

console.log(num(5))