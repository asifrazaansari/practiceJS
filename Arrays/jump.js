
const nums = [2, 1, 0, 3]
const jump = function (nums) {

    let newMax = 0;
    let jump = 0;
    let oldMax = 0;
    for (let i = 0; i < nums.length - 1; i++) {
        newMax = Math.max(newMax, i + nums[i]);
        if (i == oldMax) {
            jump++;
            oldMax = newMax;
        }
    }
    if (oldMax >= (nums.length - 1)) {
        return jump;
    } else {
        return -1;
    }
}

console.log(jump(nums))