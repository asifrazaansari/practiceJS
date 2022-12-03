const str = "hello world"

// function frequencyCounter(str){
//     const frequency = {}
//     for(let i in  str){
//         if(str[i] === " ") continue
//         else {
//             frequency[str[i]] = (frequency[str[i]] || 0) + 1
//         }
//     }
//     for(let freq in frequency){
//         console.log(freq, frequency[freq])
//     }
// }

//console.log(frequencyCounter(str))

function frequency(str){
    const result = new Array(26).fill(0)
    
    for(let st in str){
        let index = str[st].charCodeAt() - "a".charCodeAt()
        if(index <= 26 && index >=0)
            result[index] += 1
    }
    
    let output = ""
    for(let i=0; i<result.length; i++){
        if(result[i] > 0){
            output += `${String.fromCharCode(i + "a".charCodeAt())} ${result[i]}\n`
        }
    }
    return output
}

//console.log(frequency(str))
//============================================//

const string = "12553451"

const freqNumber = (string) => {
    const result = {}
    for(let str in string){
        result[string[str]] = (result[string[str]] || 0) + 1
    }
    
    let output = ""
    for(let res in result){
        output += `${res} ${result[res]}\n`
    }
    return output
}

//console.log(freqNumber(string))

//=====================================//

const num = [7, 7, 8, 12, 12]
// [7, 7, 8, 12, 12, 12, 12]
const countFreq = function (num){
    const result = {}
    for(let i in num){
        result[num[i]] = (result[num[i]] || 0) + 1
    }

    const key = Object.keys(result)
    
    let count = 0
    for(let i=0; i<key.length - 1; i++){
        if(result[key[i]] != result[key[i+1]]){
            if(result[key[i]] != count) return key[i]
            else return key[i+1]
        } else count = result[key[i]]
    }
}

console.log(countFreq(num))

// (function()
// {
//     console.log('this function in an IIFE will return undefined, but we don\'t care');
// }());