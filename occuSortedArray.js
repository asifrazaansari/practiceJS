//Find First and Last Position of Element in Sorted Array

/*
//method1
function searchRange(nums, target) {
    return [nums.indexOf(target), nums.lastIndexOf(target)];
}

//method2
function searchRange(nums, target) {
    let result = [-1, -1]
    let i = 0, j = nums.length - 1
    while(i <= j) {
        let mid = Math.floor((i + j) / 2)
        if(nums[mid] < target) {
            i = mid + 1
        } else if(nums[mid] > target) {
            j = mid - 1
        } else {
            let left = mid, right = mid
            while(nums[left] === target && left >= 0) {
                left -= 1
            }
            result[0] = left + 1
            while(nums[right] === target && right < nums.length) {
                right += 1
            }
            result[1] = right - 1
            return result
        }
    }
    return result
}
*/

// method3
const searchRange = function(nums, target) {
    let left =0, right = nums.length - 1
    let leftOccurr = -1, rightOcurr = -1

    //left occurrence
    while(left <= right){
        let mid = Math.floor(left + (right - left) / 2)

        if(nums[mid] === target){
            leftOccurr = mid
            right = mid - 1
        }
        else if(nums[mid] < target) left = mid + 1
        else right = mid - 1
    }

    //right occurrence
    left =0, right = nums.length - 1
    while(left <= right){
        let mid = Math.floor(left + (right - left) / 2)

        if(nums[mid] === target){
            rightOcurr = mid
            left = mid + 1
        }
        else if(nums[mid] < target) left = mid + 1
        else right = mid - 1
    }
    return [leftOccurr, rightOcurr]
}

console.log(searchRange([5,7,7,8,8,10], 8))