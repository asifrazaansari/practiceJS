const searchRotatedSortArray = function (arr, target) {
    let left = 0, right = arr.length - 1

    while (left <= right) {

        let mid = Math.floor(left + (right - left) / 2)

        if (arr[mid] === target) return mid
        else if (arr[left] <= arr[mid]) {
            if (target < arr[mid] && target >= arr[left]) {
                right = mid - 1
            } else {
                left = mid + 1
            }
        } else if (arr[mid] <= arr[right]) {
            if (target > arr[mid] && target <= arr[right]) {
                left = mid + 1
            } else {
                right = mid - 1
            }
        }
    }
    return -1

}

//console.log(searchRotatedSortArray([4, 5, 6, 7, 0, 1, 2], 0))


//Search in Rotated Sorted Array II

const search = function(nums, target) {
    let left = 0, right = nums.length - 1

    while(left <= right){
        let mid = Math.floor(left + (right- left)/2)

        if(nums[mid] === target){
            return true
        }else if(nums[mid] < nums[right] || nums[mid] < nums[left]){
            if(target > nums[mid] && target <= nums[right]){
                left = mid+ 1
            }else {
                right = mid - 1
            }
        }else if(nums[left] < nums[mid] || nums[mid] > nums[right]){
            if(target < nums[mid] && target >= nums[left]){
                right = mid - 1
            }else {
                left = mid + 1
            }
        }else{
            // arr[low] === arr[high] === arr[mid]
            left++
        }
    }
    return false
}

console.log(search([1,1,1,1,1,1,1,1,1,13,1,1,1,1,1,1,1,1,1,1,1,1], 13))

