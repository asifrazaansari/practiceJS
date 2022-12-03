//find the pairs that sums closest to 12
const ele = [1, 2, 5, 8, 10, 14]

function closestSum(ele) {
    let left = 0, result, diff = Infinity
    let right = ele.length - 1

    while (left < right) {
        let currDiff = Math.abs(ele[left] + ele[right] - 12)
        if (currDiff < diff) {
            result = [ele[left], ele[right]]
            diff = currDiff
        }
        if ((ele[left] + ele[right] - 12) > 0) right--
        else left++
    }
    return result
}

console.log(closestSum(ele))
