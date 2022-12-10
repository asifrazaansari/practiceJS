function duplicate(nums) {
    for (let i = 0; i < nums.length; i++) {
        let val = nums[i]
        if (val < 0) val *= -1
        if (nums[val - 1] < 0)
            return Math.abs(nums[i])
        else
            nums[val - 1] *= -1
    }
}

console.log(duplicate([1, 2, 5, 3, 3]))
