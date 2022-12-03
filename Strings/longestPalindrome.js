const longestPalindrome = function(s) {
    if(s.length <= 0) return 0

    const result = {}
    let length = 0

    for(const palind of s){
        result[palind] = (result[palind] || 0) + 1
        if(result[palind] %2 === 0) length+=2
    }

    return s.length > length ? length + 1 : length
}