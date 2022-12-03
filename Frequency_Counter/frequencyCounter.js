const array = [1, 1, 2, 6, 4, 6, 2, 6]

function frequencyCounter(array) {
    let obj = {};
    for (let i = 0; i < array.length; i++) {
        if (!obj[array[i]]) {
            obj[array[i]] = 1
        }
        else {
            obj[array[i]] += 1
        }
    }
    return obj
}

console.log(frequencyCounter(array))