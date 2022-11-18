/*
function matchingStrings(strings, queries) {
    const qresult = {}
    const result = []
    for(let i=0; i<strings.length; i++){
        qresult[strings[i]] = (qresult[strings[i]] || 0) + 1
    }
    console.log(qresult)
    for(let i=0; i<queries.length; i++){
        if(qresult[queries[i]]){
            result.push(qresult[queries[i]])
        }else{
            result.push(0)
        }
    }
    return result
}

console.log(matchingStrings(["ab", "ab", "abc"], ["ab", "abc", "bc"]))
*/
