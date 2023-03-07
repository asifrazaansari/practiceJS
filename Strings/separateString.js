const str = "asbn5afsua6agus3"


function separateString(str) {
    const result = []
    let temp = ""
    for (let i = 0; i < str.length; i++) {
        if (!isNaN(str[i])) {
            result.push(temp)
            temp = ""
        } else {
            temp += str[i]
        }
    }
    return result
}


console.log(separateString(str))