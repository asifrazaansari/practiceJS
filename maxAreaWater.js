const maxArea = function(height) {
    

    let left = 0, right = height.length - 1
    let max = 0
    while(left < right){

        let minHeight = Math.min(height[left], height[right])
        let len = right- left
        max = Math.max(max, minHeight*len)

        if(height[left] > height[right]) right--
        else left++
    }
    return max
}

console.log(maxArea([1,1]))