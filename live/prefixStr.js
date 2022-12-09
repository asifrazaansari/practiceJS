const arr = ["apple", "ape", "apple"]

function prefix(arr) {
    let str = ""
    arr.sort()

    let i = 0
    while (arr[0][i] === arr[arr.length - 1][i]) {
        str += arr[0][i]
        i++
    }

    return str
}

console.log(prefix(arr))


