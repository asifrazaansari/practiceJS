/*
var maxFrequency = function(nums, k) { 
    nums.sort((a, b) => a - b);
    var sum = 0;
    var start = 0;
    var maxLen = 0;
    for (var i = 0; i < nums.length; i++) {
        sum = sum + nums[i];
        if (sum + k >= nums[i] * (i - start + 1)) {     //valid condition: accumulated sum + k >= current element * (window size)
            maxLen = Math.max(maxLen, i - start + 1);
        } else {
            sum = sum - nums[start];
            start = start + 1;
        }
    }
    return maxLen;
};
*/
var maxFrequency = function (nums, k) {
    // We sorted because as we are allowed only to increment the value & we try to increase the smaller el to some larger el
    nums.sort((a, b) => a - b);

    let left = 0;
    let max = Math.max(); // without any args, Math.max() is -Infinity
    let curr = 0;
    // I have used 'for loop' so rightPtr is 'i' here
    for (let i = 0; i < nums.length; i++) {
        curr += nums[i];
        // decrement the winSize once the value required to convert could not be achieved even after utilizing K
        // (i-left+1) * nums[i] because we are converting every el upto that winSize by current el
        while ((i - left + 1) * nums[i] > curr + k) {
            curr -= nums[left++]
        }
        max = Math.max(max, i - left + 1);
    }
    return max;
};

console.log(maxFrequency([1, 4, 8, 13], 5))