let nums = [-1, 2, 1, -4], target = 1


const threeSumClosest = function(nums, target) {
    nums.sort((a,b) => {return a - b})
    let closest = Infinity; 
   for(let first = 0; first < nums.length-2; first++){
       let second = first + 1 , third = nums.length - 1
      
       while(second < third){
           let localSum = nums[first] + nums[second] + nums[third];
            if (Math.abs(localSum - target) < Math.abs(closest - target)) closest = localSum;
            if (localSum > target) third--;
            else second++;
       }
   }
   return closest
};
console.log(threeSumClosest(nums, target))