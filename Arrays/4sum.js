const nums = [-3,-1,0,2,4,5]  //[[-3,-1,0,4]]
const target = 0

function fourSum(nums, target) {

    const result = []
    if(nums.length < 4) return result
    nums.sort((a, b) => {
        return a - b    // [ -2, -1, 0, 0, 1, 2 ]
    })

    for (let first = 0; first < nums.length; first++) {
        for (let second = first + 1; second < nums.length; second++) {
            let third = second + 1
            let fourth = nums.length - 1

            while (third < fourth) {
                const sum = nums[first] + nums[second] + nums[third] + nums[fourth]
                if (sum === target) {
                    //result[[nums[first],nums[second],nums[third],nums[fourth]]] = [nums[first],nums[second],nums[third],nums[fourth]]
                    result.push([nums[first],nums[second],nums[third],nums[fourth]])
                    //console.log(result)
                    while(nums[third] === nums[third + 1]) third++
                    while(nums[fourth] === nums[fourth - 1]) fourth--
                    third++, fourth--
                } else if (sum > target) {
                    fourth--
                } else if (sum < target) {
                    third++
                }
            }
            while(nums[second] === nums[second + 1]) second++
        }
        while(nums[first] === nums[first + 1]) first++
    }

    return result
}


console.log(fourSum(nums, target))

/*
function forSum(nums, target){
    nums.sort((a, b) => {
        return a - b   
    })
    const result = {}
    let first = 0, second = nums.length - 1
    while(first < second){
        let third = first + 1, fourth = second - 1
        while(third < fourth){
            var sum = nums[first] + nums[second] + nums[third] + nums[fourth]

            if(sum === target){
                result[[nums[first],nums[second],nums[third],nums[fourth]]] = [nums[first],nums[second],nums[third],nums[fourth]]
                third++
                fourth--
            }else if(sum > target){
                second--
                fourth--
            }else {
                third++
            }
        }
        first++
    }
    return Object.values(result)
}

console.log(forSum(nums, target))
*/