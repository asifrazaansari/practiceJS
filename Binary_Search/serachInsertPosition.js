const nums = [1,3,5,6], target = 5


const searchInsert = function(nums, target) {
    let left = 0
    let right = nums.length

    while(left < right){
        let mid  = Math.floor(left + (right- left)/2)
        
        if(nums[mid] < target){
            left = mid + 1
        }else{
            right = mid
        }
    }
    return left
}


console.log(searchInsert(nums, target))