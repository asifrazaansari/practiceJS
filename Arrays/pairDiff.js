function pairDiff(arr, target) {
    const obj = {}

    for(const ele of arr) obj[ele] = (obj[ele] || 0) + 1

    for (let i = 0; i < arr.length; i++) {
        if ((target + arr[i]) in obj) {
            return true
        }
    }
    return -1
}

console.log(pairDiff([5, 20, 3, 2, 5, 80], 78))