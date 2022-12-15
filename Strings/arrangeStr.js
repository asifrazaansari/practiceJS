let str = "Tab4le t1his a3 2is" // this is a table


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

console.log(arrange(str))

