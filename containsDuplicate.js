// const containsNearbyDuplicate = function(nums, k) {
//     const set = new Set();
//     let left = 0;
//     let right = 0;

//     if (k === 0) return false;

//     while (right < nums.length) {
//         if (set.has(nums[right])) return true;

//         set.add(nums[right]);

//         if (right - left < k) {
//             right++;
//         } else {
//             set.delete(nums[left]);
//             right++;
//             left++;
//         }
//     }

//     return false;
// }

const containsNearbyDuplicate = function (nums, k) {
    const cache = {};
    for (let i = 0; i < nums.length; i++) {
        if (i - cache[nums[i]] <= k) {
            return true;
        } else {
            cache[nums[i]] = i;
        };
    };
    return false;
}

//console.log(containsNearbyDuplicate([1,2,3,1],3))