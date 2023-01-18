const nums = [0,0,1,1,1,2,2,3,3,4]

// const removeDuplicates = function(nums) {
//     let i = 0;
//     for (let j = 1; j < nums.length; j++) {
//         if (nums[j] != nums[i]) 
//             nums[++i] = nums[j];
//     }
//     return ++i
// }




const removeDuplicates = function(nums) {
    const res = [nums[0]]
    for (let j = 1; j < nums.length; j++) {
        if(nums[j] !== res[res.length - 1]){
            res.push(nums[j])
        }
    }
    return res
}

console.log(removeDuplicates(nums))