function sortstack(input) {
    let tmpStack = [];
    while (input.length > 0) {
        // pop out the first element
        let tmp = input.pop();

        // while temporary stack is not empty and
        // top of stack is greater than temp
        while (tmpStack.length > 0 && tmpStack[tmpStack.length - 1] > tmp) {
            // pop from temporary stack and
            // push it to the input stack
            input.push(tmpStack[tmpStack.length - 1]);
            tmpStack.pop()
        }

        // push temp in temporary of stack
        tmpStack.push(tmp);
    }
    return tmpStack;
}

console.log(sortstack([3, 9, 7, 8, 1, 4, 6]))