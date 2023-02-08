const s = s = "(()"

var longestValidParentheses = function(s) {
    let open = 0, close = 0, maxLen = 0;

    for(let c of s) {
        if(c === '(') open++;
        else close++;
        if(open === close) maxLen = Math.max(maxLen, close*2);
        else if(close > open) open = close = 0;
    }

    open = close = 0;
    
    for(let i = s.length-1; i >= 0; i--) {
        if(s[i] === ')') close++;
        else open++;
        if(open === close) maxLen = Math.max(maxLen, open*2);
        else if(open > close) open = close = 0;
    }
    return maxLen;
};


// stack approach
var longestValidParentheses = function(s) {
    let longest = 0
    let stack=[-1]
    
    for(let i=0;i<s.length;i++){
      let char = s[i]
      
      if(char === '('){
        stack.push(i)
        continue
      }
      
      stack.pop()
      if(!stack.length) stack.push(i)
      else longest = Math.max((i - stack[stack.length-1]),longest)
    }
  
    return longest
};