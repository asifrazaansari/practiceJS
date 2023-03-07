const array = [4, 7, 6, 21, 47, 3, 4, 4]


function sqrCube(array){
    for(let i=0; i<array.length; i++){
        if(array[i] % 2 === 0){
            console.log(`Square: ${array[i] ** 2} Cube: ${array[i] ** 3}`)
        }
    }
    return ""
}

console.log(sqrCube(array))