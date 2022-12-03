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

//console.log(containsNearbyDuplicate([1, 2, 3, 1], 2))

/*
function duplicate(arrays){
    const map = new Map()

    for(const arr of arrays){
        if(map.has(arr)) map.set(arr, map.get(arr) + 1)
        else map.set(arr, 1)
    }

    const result = []

    for(const num of map){
        if(num[1] === 1){
            result.push(num[0])
        }
    }

    return result
}

console.log(duplicate([1,2,3,1,2]))
*/

function duplicate(arrays) {
    const map = new Map()

    for (const arr of arrays) {
        if (map.has(arr)) map.delete(arr)
        else map.set(arr, 1)
    }

    return map.keys()
}

//console.log(duplicate([1, 2, 3, 1, 2]))


const findDuplicates = function (nums) {
    const result = []

    for (let i = 0; i < nums.length; i++) {
        let x = Math.abs(nums[i])
        let index = x - 1

        if (nums[index] < 0) result.push(x)
        else nums[index] = nums[index] * -1
    }

    return result
}

console.log(findDuplicates([4,3,2,7,8,2,3,1]))