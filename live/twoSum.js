const twoSum = function (nums, target) {

    const vals = {};

    for (let i = 0; i < nums.length; i++) {
        if (target - nums[i] in vals) {
            return [vals[target - nums[i]], i];
        } else {
            vals[nums[i]] = i;
        }
    }
    return [];
}

console.log(twoSum([2, 7, 11, 15], 9))