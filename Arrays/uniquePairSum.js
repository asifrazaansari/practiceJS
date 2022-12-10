// unique pair sum equal to target 


function uniquePairSum(arrays, target) {
    const result = []

    const map = new Map(), newMap = new Map()

    for (const num of arrays) {
        if (map.has(num)) map.set(num, map.get(num) + 1)
        else map.set(num, 1)
    }

    for (let [key, value] of map) {
        let findEle = target - key
        if(map.has(findEle)){
            if(!newMap.has(findEle)){
                newMap.set(key, findEle)
                result.push([key, findEle])
            }
        }
    }

    return result
}

console.log(uniquePairSum([1,5,5], 6))



function pairSum(arr, target){
    let left = 0, right = arr.length - 1

    arr.sort((a,b) =>  a - b)

    while(left < right){
        let sum  = arr[left] + arr[right]

        if(sum === target){
            return 1
        }else if(sum < target){
            right--
        }else {
            left++
        }
    }

    return 0
}

//console.log(pairSum([0, 0, 0, 0, 0, -1, -1, -1, -1, -1], -1))
