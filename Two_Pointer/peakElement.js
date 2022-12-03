const findPeakElement = function(nums) {
    let left = 0, right = nums.length - 1

    while(left <= right){
       let mid = Math.floor(left + (right - left)/2)

        if(left === right){
            return left
        }else if(nums[mid] < nums[mid + 1]){
            left = mid + 1
        }else {
            right = mid
        }
    }
}

console.log(findPeakElement([1,2,3,1]))