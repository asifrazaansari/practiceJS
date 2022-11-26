// const topKFrequent = function(nums) {
//     const map = new Map()
//     for(let i=0; i<nums.length; i++){
//         if(map.has(nums[i])){
//             map.set(nums[i], map.get(nums[i]) + 1)
//         }else{
//             map.set(nums[i], 1)
//         }
//     }
//     const output = []
//     for(const freq of map){
//         output.push(freq)
//     }
//     return output
// }


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

console.log(topKFrequent([1,1,1,2,2,3], 2));