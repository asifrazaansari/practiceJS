/*
var topKFrequent = function(nums, k) {
    const map = {};
    
    nums.forEach((ele) =>{
        map[ele] = (map[ele] || 0) +1;
    })
    
    const countArr = Array(nums.length +1).fill(false);
    
    Object.entries(map).forEach(([k, v]) =>{
     if(!countArr[v]){
        countArr[v] = [k];
        } else {
            countArr[v].push(k);        
        }
    });
    
    let i= countArr.length -1;
    
    const res = []
    
    while(k>0){
        if(!countArr[i] || countArr[i].length == 0) {
            i--;
        }else {
            res.push(countArr[i].pop());
            k--;
        }
    }
    
    return res;
};

console.log(topKFrequent())
*/

const topKFrequent = function (nums, k) {
    const obj = {};
    for (let num of nums) {
      if (!obj[num]) {
        obj[num] = 1;
      } else {
        obj[num]++;
      }
    }

    const arr = Object.keys(obj)
    arr.sort((o1, o2) => obj[o2] - obj[o1])

    return arr.slice(0, k);
}

console.log(topKFrequent([3,3,3,3,1,1,1,2,2,3], 2))