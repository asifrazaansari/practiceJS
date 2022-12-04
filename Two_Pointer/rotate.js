function swap(nums, left, right){
    while (left < right) {
        nums[left] = nums[left] + nums[right]
        nums[right] = nums[left] - nums[right]
        nums[left] = nums[left] - nums[right]
        left++
        right--
    }
    return nums
}


const rotate = function (nums, k) {

    if(nums.length === k) return nums
    while(nums.length < k) k = k - nums.length 

    swap(nums, left = 0, right = nums.length - 1)
    swap(nums, left = 0, k-1)
    swap(nums, k, right = nums.length - 1)

    return nums
}

console.log(rotate([1,2], 5))

/*
//method2
function reverse(arr) {
    let l = 0, r = arr.length - 1
    while (l < r) {
        arr[l] = arr[l] + arr[r]
        arr[r] = arr[l] - arr[r]
        arr[l] = arr[l] - arr[r]
        l++
        r--
    }
    return arr
}

var rotate = function (nums, k) {
    let fullRev = reverse(nums)
    let firstLeft = reverse(fullRev.slice(0, k))
    let secondRev = reverse(fullRev.slice(k))
    return firstLeft.concat(secondRev)
};




//method3
var rotate = function(nums, k) {
    let length = nums.length;
    let result = [...nums];
    
    for (let i = 0; i < length; i++) {
        let index = (i + k) % length;
        nums[index] = result[i];
    };

};
*/