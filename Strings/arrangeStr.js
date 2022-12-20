//let str = "Tab4le t1his a3 2is" // this is a table


function arrange(str){
    const arr = str.split(" ")
    const result = []
    for(let i=0; i<arr.length; i++){
        for(let j = 0; j<arr[i].length; j++){
            if(isNaN(arr[i][j])){
               continue
            }else{
                result[arr[i][j] -1] = arr[i]
                break
            }
        }
    }
    
    for(let i=0; i<result.length; i++){
        let temp = result[i].split("")
        let tempStr = ""
        for(let i=0; i<temp.length; i++){
            if(isNaN(temp[i])) tempStr += temp[i]
        }
        result[i] = tempStr
    }
    return result.join(" ")
}

//console.log(arrange(str))


// Given a sentence with numbers representing a word's location embedded within each word, return the sorted sentence.
// Example:
// rearrange("is2 Thi1s T4est 3a") ➞ "This is a Test"

let str = "is2 Thi1s T4est 3a"
function arrangeWord(str) {
    str = str.split(" ")
    const result = []
    let position = 0
    for (let i = 0; i < str.length; i++) {
        res = ""
        for (let j = 0; j < str[i].length; j++) {
            if (!isNaN(str[i][j])) position = str[i][j]
            else res += str[i][j]
        }
        result[position - 1] = res
    }
    return result.join(" ")
}

console.log(arrangeWord(str))
