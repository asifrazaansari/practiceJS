const n = 5, s = 12, arr =[1,2,3,4,5,6,7,8,9,10]


function subarraySum(arr, n, s) {
    let left = 0, right = 1
    let ele = arr[left]
    while (left < n) {
        ele += arr[right]

        if (ele === s) {
            return `${left + 1} ${right + 1}`
        } else if (ele > s) {
            ele -= arr[left]
            left++
            if(ele === s) return `${left + 1} ${right + 1}`
        } else {
            right++
        }
    }
    return - 1
}

console.log(subarraySum(arr, n ,s))

