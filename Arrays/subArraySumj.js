function subArrSum(arr, k) {
    let res = 0
    for (let i = 0; i < arr.length; i++) {
        let sum = 0
        for (let j = i; j < arr.length; j++) {
            sum += arr[j];


            if (sum == k)
                res++;
        }
    }
    return res
}
console.log(subArrSum([-1, -1, 1], 0))

const subarraySum = function (nums, k) {
    const map = new Map([[0, 1]]);
    let sum = 0;
    let total = 0;
    for (let num of nums) {
        sum = sum + num;
        total += (map.get(sum - k) || 0);
        map.set(sum, (map.get(sum) || 0) + 1);
    }

    return total;
}

console.log(subarraySum([-1, -1, 1], 0))