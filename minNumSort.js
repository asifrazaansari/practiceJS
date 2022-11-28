// Brute force O(N)
// const findMin = function(nums) {
//     let currentMin = nums[0];
//     for(let i = 1; i < nums.length; i++) {
//       currentMin = Math.min(currentMin, nums[i]);
//     }
//   return currentMin;
// };


// Optimized: O(logN) MODIFIED Binary Search
const findMin = (nums) => {
  
    let low = 0;
    let high = nums.length - 1;
  
    while (low < high) {
        let mid = Math.floor(low + (high - low) / 2);
        // Found the pivot point where the rotation began
        if (nums[mid] > nums[high]) {
            low = mid + 1;
        } else {
            high = mid;
        }
    }
    return nums[low];
}

console.log(findMin([11,13,15,17]))