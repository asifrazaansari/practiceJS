function isVowel(ch) {
    if (ch == 'a' || ch == 'e' || ch == 'i' || ch == 'o' || ch == 'u') return 1
    else return 0
}

function solution(str) {
    let hard = 0, easy = 0, consonent = 0, vowels = 0
    
    str.split(" ");

    for(let i = 0; i < str.length; i++) {
        let s = str[i];
        
        for(let j = 0; j < s.length; j++) {
            if(isVowel(s[j].toLowerCase())) vowels++
            else if(s[j] != " ") consonent++         
        }

        if(consonent > vowels) hard++
        else easy++

        consonent = 0, vowels = 0
    }
    
    return (5 * hard) + (3 * easy)
}

console.log(solution("Difficulty and sentence"))


// function solution(string) {
//     let hard = 0;
//     let easy = 0;
    
//     if(string.length <= 0) return 0;
    
//     let str = string.split(" ");
//     let consonent = 0;
//     let arr = ["a","e","i","o","u","A","E","I","O","U"];
    
//     for(let i = 0; i < str.length; i++) {
//         let s = str[i];
        
//         for(let j = 0; j < s.length; j++) {
//             if(arr.indexOf(s[j]) == -1)
//                 consonent++;     
//         }
        
//         let vowels = s.length - consonent;
        
//         if(consonent > vowels) 
//             hard = hard + 1;
//         else 
//             easy = easy + 1;
        
//         consonent = 0;
//         vowels = 0;
//     }
    
//     let result = (5 * hard) + (3 * easy)
//     return result;
// }
