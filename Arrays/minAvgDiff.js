const minimumAverageDifference = function (nums) {
    let res = Infinity
    let firstAvg = 0, ind = 0, lastAvg = 0 


    let total = 0

    for (let i = 0; i < nums.length; i++) total += nums[i]

    for (let i = 0; i < nums.length; i++) {
        firstAvg += nums[i]
        let avg = Math.floor(firstAvg / (i + 1))

        total -= nums[i]
        lastAvg = Math.floor(total / (nums.length - i - 1))
        if(isNaN(lastAvg)) lastAvg = 0
        
        let out = Math.abs(avg - lastAvg)

        if (out <= res) {
            res = out
            ind = i
        }

    }
    return ind
}

console.log(minimumAverageDifference([4,2,0]))