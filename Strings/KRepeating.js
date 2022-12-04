var longestSubstring = function(str, k) {
    let n = str.length;
    if(n < k) return 0;
    if(k <= 1) return n;
    
    let counts = {};
    for(let s of str){
        counts[s] = (counts[s] || 0) +1;
    }
    
    let l = 0;
    while(l < n && counts[str[l]] >= k) l++;
    if(l >= n-1) return l;
    
    let ls1 = longestSubstring(str.slice(0, l), k);
    while(l < n && counts[str[l]] < k) l++;
    let ls2 = (l < n)? longestSubstring(str.slice(l), k) : 0;
    
    return Math.max(ls1, ls2);
};

// method2

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
};

var longestSubstring = function(s, k) {
return findSubString(0,s.length,s,k);
};