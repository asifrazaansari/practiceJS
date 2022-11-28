const sortedSquares = function (nums) {
    let left = 0, right = nums.length - 1
    const result = []

    while (left <= right) {
        if (nums[left] ** 2 < nums[right] ** 2) {
            result.push(nums[right] ** 2)
            right--
        } else {
            result.push(nums[left] ** 2)
            left++
        }
    }
    return result.reverse()
}

console.log(sortedSquares([-5, -3, -2, -1]))