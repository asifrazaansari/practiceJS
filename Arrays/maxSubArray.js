
//Brute-force approach

function maxSubArray(nums) {

    if (nums == null || nums.length == 0)
        return 0;

    let maxSum = nums[0];

    for (let i = 0; i < nums.length; i++) {
        for (let j = i; j < nums.length; j++) {
            let currSum = 0;

            for (let k = i; k <= j; k++) {
                currSum += nums[k];
            }

            maxSum = Math.max(maxSum, currSum);
        }
    }

    return maxSum;
}

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]))

//improved version
function MaxSubArray(nums) {

    if (nums == null || nums.length == 0)
        return 0;

    let maxSum = nums[0];

    for (let i = 0; i < nums.length; i++) {
        let currSum = 0;

        for (let j = i; j < nums.length; j++) {
            currSum += nums[j];
            maxSum = Math.max(maxSum, currSum);
        }
    }

    return maxSum;
}

console.log(MaxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]))
/*
//Dynamic Programming approach
public class Solution {
    public let MaxSubArray(let[] nums) {
        
        if(nums == null || nums.length == 0)
            return 0;
        
        let[] dp = new let[nums.length];
        dp[0] = nums[0];
        
        for(let i = 1; i < nums.length; i++)
        {
            dp[i] =Math.max(dp[i - 1] + nums[i], nums[i]);
        }
        
        return dp.Max();        
    }
}
*/





//  kaden's algo
function maxSubArr(arr) {
    let maxSum = arr[0], currentSum = 0

    for (let i = 0; i < arr.length; i++) {
        currentSum += arr[i]
        maxSum = Math.max(currentSum, maxSum)

        if (currentSum < 0) currentSum = 0
    }
    return maxSum
}

console.log(maxSubArr([-2, 1, -3, 4, -1, 2, 1, -5, 4]))