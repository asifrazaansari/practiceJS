const s = "()[]{}"
var isValid = function(s) {
    const stack = []
    for(let i=0; i<s.length; i++){
        if(s[i] === '(' || s[i] === '{' || s[i] === '['){
            stack.push(s[i])
        }else{
            if(stack.length === 0) return false
            let lastEle = stack.pop()

            if((lastEle === "(" && s[i] === ')') || (lastEle === '{' && s[i] === '}') || (lastEle === '[' && s[i] === ']')){
                continue
            }else{
                return false
            }
        }
    }
    if(stack.length === 0) return true
    return false
}

console.log(isValid(s))

var isValid = function(s) {   
    const stack = [];
    
    for (let i = 0 ; i < s.length ; i++) {
        let c = s.charAt(i);
        switch(c) {
            case '(': stack.push(')');
                break;
            case '[': stack.push(']');
                break;
            case '{': stack.push('}');
                break;
            default:
                if (c !== stack.pop()) {
                    return false;
                }
        }
    }
    
    return stack.length === 0;
};

var isValid = function(s) {
    let stack = [];
    const map = {
        ')' : '(',
        '}' : '{',
        ']' : '['
    }
    for(let i = 0; i < s.length;i++){
        if(stack.length !== 0 && map[s[i]] === stack[stack.length - 1]){ // making sure stack is not empty and comparing current element with stack's last element
            stack.pop(); // If we find the same elements remove from stack
        }else{
            stack.push(s[i]); // else add s[i] to stack
        }
    }
    return !stack.length  // at the end return whether stack is empty or not
};