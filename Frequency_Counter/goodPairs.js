const numIdenticalPairs = function (nums) {
    let count = 0
    const obj = {}
    for (let i = 0; i < nums.length; i++) {
        if (obj[nums[i]]) {
            count += obj[nums[i]]
            console.log(count, obj[nums[i]])
            obj[nums[i]]++
        } else {
            obj[nums[i]] = 1
        }
    }
    return count
}

console.log(numIdenticalPairs([1, 2, 3, 1, 1, 3]))