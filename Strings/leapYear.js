function test_LeapYear(year) {
    for(let i = 1; i<year; i++){
        if ((i % 4 === 0 && i % 100 !== 0) || (i % 100 === 0 && i % 400 === 0)) console.log(i) 
    }
   
 }

 //console.log(test_LeapYear(8))

 function solution(str) {
    const count = {}
    for(let i=0; i<str.length; i++){
        if(count[str[i]]){
            continue;
        }else{
            count[str[i]] = 1
        }
    }
   return Object.keys(count).join("")
}

console.log(solution("hello"))