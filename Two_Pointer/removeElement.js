const nums = [3,2,2,3], val = 3

const removeElement = function(nums, val) {
    let firstPointer = 0
    let lastPointer = nums.length - 1

    while(firstPointer <= lastPointer){
        if(nums[firstPointer] === val){
            nums[firstPointer] = nums[lastPointer--]
        }else{
            firstPointer++
        }
    }
    return lastPointer + 1
}

console.log(removeElement(nums, val))