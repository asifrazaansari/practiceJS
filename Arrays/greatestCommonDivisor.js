const findGCD = function (nums) {
    let smallest = nums[0]
    let largest = nums[0]
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] < smallest) {
            smallest = nums[i]
        }
        if (nums[i] > largest) {
            largest = nums[i]
        }
    }
    console.log(smallest, largest)
    // let greatestDivisor = 1
    // for(let i=2; i<=largest; i++){
    //     if(smallest % i == 0 && largest % i == 0){
    //         if(i > greatestDivisor){
    //             greatestDivisor = i
    //         }
    //     }
    // }
    // return greatestDivisor

    for (let i = smallest; i >= 1; i--) {
        if (smallest % i == 0 && largest % i == 0) {
            return i
        }
    }
}

console.log(findGCD([8, 8, 16]))