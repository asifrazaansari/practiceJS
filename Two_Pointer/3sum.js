// function threeSum(nums) {
//     nums.sort((a, b) => a - b)
//     const result = []
//     if (nums.length < 3) return result
//     for (let i = 0; i < nums.length; i++) {
//         let left = i + 1
//         let right = nums.length - 1
//         if (i > 0 && nums[i] === nums[i - 1]) continue
//         while (left < right) {
//             let sum = nums[i] + nums[left] + nums[right]

//             if (sum === 0) {
//                 let arr = [nums[i], nums[left], nums[right]]
//                 result.push(arr)
//                 left++
//                 while (nums[left] === nums[left - 1] && left < right) left++
//             } else if (sum > 0) {
//                 right--
//             } else {
//                 left++
//             }
//         }
//     }
//     return result
// }






// const threeSum = function (nums) {
//     nums.sort((a, b) => {
//         return a - b
//     })
//     const res = []

//     let total = 0
//     for(let i=0; i<3; i++){
//         total += nums[i]
//     }
//     if(total === 0){
//         res.push([nums[0],nums[1],nums[2]])
//     }

//     for(let i=3; i<nums.length; i++){
//         total += nums[i]
//         total -= nums[i - 3]
//         if(total == 0) res.push([nums[i-2],nums[i-1],nums[i]])
//     }

//     return res
// }

console.log(threeSum([-1, 0, 1, 2, -1, -4]))

function threeSum(nums) {

    const obj = {}
    nums = nums.sort((a, b) => a - b)

    for (let start = 0; start < nums.length; start++) {
        let right = nums.length - 1
        let left = start + 1
        while (left < right) {
            if (nums[left] + nums[right] + nums[start] == 0) {
                obj[[nums[start], nums[left], nums[right]]] = [nums[start], nums[left], nums[right]]
                console.log(obj)
                left++
                right--
            } else if (nums[left] + nums[right] + nums[start] > 0) {
                right--
            } else if (nums[left] + nums[right] + nums[start] < 0) {
                left++
            }
        }
    }
    return (Object.values(obj))
}