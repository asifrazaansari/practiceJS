const reverseWords = function(s) {
    const splitArray = []
    let word = ""
    for(let i=0; i<s.length; i++){
        if(s[i] !== " "){
            word += s[i]
        }else if(s[i] === " " && word !== ""){
            splitArray.push(word)
            word = ""
        }
    }
    splitArray.push(word)


    let left = 0, right = splitArray.length - 1

    while(left  < right){
        [splitArray[left], splitArray[right]] = [splitArray[right], splitArray[left]]
        left++
        right--
    }

    return splitArray.join(" ").trim()
}

//console.log(reverseWords("  hello world  "))

/*
// method 2
var reverseWrds = function(s) {
    let trimmedString = s.trim();
    let stringToArray = trimmedString.split(' ');
    //console.log(stringToArray)
    let filteredArray = stringToArray.filter((value) => value);
    //console.log(filteredArray)
    let reversedArray = filteredArray.reverse();
    let joinedString = reversedArray.join(' ');
    return joinedString;
};

console.log(reverseWrds("a good   example"))


//method3

var reverseWords = function(s) {    
    let reverse = '';
    let words = s.split(' ');
    
    for( let i = words.length-1; i >= 0; i-- ) {
         if( words[i] == '' ) {
             continue;
         } 
         reverse += words[i] + ' ';               
    }
    
    return reverse.trim();
};

*/