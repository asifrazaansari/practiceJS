const nums = [1, 2, 3, 4]
const runningSum = function (nums) {
    const result = []
    result.push(nums[0])
    for (let i = 1; i < nums.length; i++) {
        result.push(result[i - 1] + nums[i])
    }
    return result
}

console.log(runningSum(nums))