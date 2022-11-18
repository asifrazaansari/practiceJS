//Longest Substring Without Repeating Characters

/*
function lengthOfLongestSubstring(str){
    let start = 0, end = 0, maxLen = 0
    
    const uniqueChar = new Set()

    while(end < str.length){
        if(!uniqueChar.has(str[end])){
            uniqueChar.add(str[end])
            end++
            maxLen = Math.max(maxLen, uniqueChar.size)
        }else{
            uniqueChar.delete(str[start])
            start++
        }
    }
    return maxLen
}

console.log(lengthOfLongestSubstring("pwwkew"))
*/

//Remove Duplicates from Sorted Array

const nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4]

const removeDuplicates = function (nums) {
    let count = 0
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] == nums[i - 1]) count++;
        else nums[i - count] = nums[i];
    }
    //console.log(nums)
    return nums.length - count;

}

console.log(removeDuplicates(nums))