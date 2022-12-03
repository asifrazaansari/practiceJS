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

console.log(uniquePairSum([4, 2, 3, 4, 7, 8, 9, 6, 2, 14, 5, 1, 3, 1], 4))