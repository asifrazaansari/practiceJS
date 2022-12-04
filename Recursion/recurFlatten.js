const array = [1,2,[3,[4,5]],6,7,[8,9]]

function recurFlatten(array){
    let result = []
    // if(array[0] !== Array) result.push(array[0])
    // return 

    for(let i=0; i<array.length; i++){
        if(Array.isArray(array[i]) === false) result.push(array[i])
        else result = result.concat(recurFlatten(array[i]))
    }
    return result
}

//console.log(recurFlatten(array))
