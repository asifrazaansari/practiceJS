/*
var moveZeroes = function(nums) {
    let left = 0
    let right = nums.length - 1
 
    while(left < right){
 
        while(nums[right] === 0 && left < right) right--
 
        while(nums[left] !== 0 && left < right) left++
 
        if(left < right){
            nums[left] = nums[left] + nums[right]
            nums[right] = nums[left] - nums[right]
            nums[left] = nums[left] - nums[right]
            left++
            right--
        }
    } 
    //console.log(nums)
    for(left=0; left<right; left++){
        if(nums[left] > nums[left + 1]){
            nums[left] = nums[left] + nums[left + 1]
            nums[left + 1] = nums[left] - nums[left + 1]
            nums[left] = nums[left] - nums[left + 1]
        }
    }
    return nums
 };
 */



 var moveZeroes = function(nums) {
    // O(n) Time Complexity
	// 2 Pointers
    let left = 0;
    
    for(let i = 0; i < nums.length; i++) {
        if(nums[i]!==0) {
            [nums[i], nums[left]] = [nums[left], nums[i]];
            left++;
        }
    }
	return nums;
};
console.log(moveZeroes([1,1,0,3,12]))