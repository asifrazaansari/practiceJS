/*
Brute-force approach

public class Solution {
    public int MaxSubArray(int[] nums) {
        
        if(nums == null || nums.Length == 0)
            return 0;
        
        int maxSum = nums[0];
        
        for(int i = 0; i < nums.Length; i++)
        {
            for(int j = i; j < nums.Length; j++)
            {
                int currSum = 0;
                
                for(int k = i; k <= j; k++)
                {
                    currSum += nums[k];
                }
                
                maxSum = Math.Max(maxSum, currSum);
            }
        }
        
        return maxSum;
    }
}

//improved version
public class Solution {
    public int MaxSubArray(int[] nums) {
        
        if(nums == null || nums.Length == 0)
            return 0;
        
        int maxSum = nums[0];
        
        for(int i = 0; i < nums.Length; i++)
        {
            int currSum = 0;
                
            for(int j = i; j < nums.Length; j++)
            {
                currSum += nums[j];
                maxSum = Math.Max(maxSum, currSum);
            }
        }
        
        return maxSum;
    }
}


//Dynamic Programming approach
public class Solution {
    public int MaxSubArray(int[] nums) {
        
        if(nums == null || nums.Length == 0)
            return 0;
        
        int[] dp = new int[nums.Length];
        dp[0] = nums[0];
        
        for(int i = 1; i < nums.Length; i++)
        {
            dp[i] = Math.Max(dp[i - 1] + nums[i], nums[i]);
        }
        
        return dp.Max();        
    }
}
*/





//  kaden's algo
function maxSubArray(arr){
    let maxSum = arr[0], currentSum = 0

    for(let i=0; i<arr.length; i++){
        currentSum += arr[i]
        maxSum = Math.max(currentSum, maxSum)

        if(currentSum < 0) currentSum = 0
    }
    return maxSum
}

console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]))