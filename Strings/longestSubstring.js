const longestSubstring = function(s, k) {
  let count  = 0
  const freq = {}
  for(let i=0; i<s.length; i++){
      freq[s[i]] = (freq[s[i]] || 0) + 1

  }
  
  // for(let i=0; i<s.length; i++){
  //   console.log(freq[s[i]], "-------") 
  //     if( k <= freq[s[i]]){
  //       console.log(freq[s[i]])
  //         count += freq[s[i]]
  //     }
  // }
  const temp =  Object.values(freq)
  console.log(temp)
  for(const val of temp){
    if(val >= k) count += val
  }
  return count
}

/*
var longestSubstring = function(s, k) {
    
  return helper(0,s.length)
  
 function helper(start, end){
     let map = {};
  
  for(let i =start; i < end; i++){
      map[s[i]] = (map[s[i]] || 0)+1;
   }
  
  for(let i =start; i < end; i++){
      if(map[s[i]] < k){
          let left =  helper(start, i);
          let right = helper(i+1,end);  

          return Math.max(left, right)
          
      }

  }

  return end - start;
     
 }
};

function findSubString(start,end,s,k){
  let obj={}
  for(let i=start;i<end;i++){
      if(obj[s[i]]!=undefined){
          obj[s[i]]=obj[s[i]]+1
      }else{
          obj[s[i]]=1
      }
  }

  for(let i=start;i<end;i++){
      if(obj[s[i]]<k){
          let ls=findSubString(start,i,s,k)
          let rs=findSubString(i+1,end,s,k)
          if(ls>rs){
              return ls
          }else{
              return rs
          }
      }
  }
  return end-start
}

var longestSubstring = function(s, k) {
return findSubString(0,s.length,s,k);
};
*/
console.log(longestSubstring("ababacb", 3))