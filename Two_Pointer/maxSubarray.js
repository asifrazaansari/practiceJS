var maxSubArray = function(nums) {
    let maxSum = nums[0], currentSum = 0
    let left = 0, right = nums.length - 1
    while(left < right){
        currentSum += nums[left]
        maxSum = Math.max(currentSum, maxSum)
        if(currentSum < 0) currentSum = 0
        left++
    }
      return maxSum
  }

  console.log(maxSubArray([5,4,-1,7,8]))
  //23