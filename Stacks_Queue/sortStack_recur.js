function sortedInsert(s, x) {
    // Base case: Either stack is empty or newly
    // inserted item is greater than top (more than all
    // existing)
    if (s.length == 0 || x > s[s.length - 1]) {
        s.push(x);
        return;
    }

    // If top is greater, remove the top item and recur
    let temp = s.pop();
    sortedInsert(s, x);

    // Put back the top item removed earlier
    s.push(temp);
}

// Method to sort stack
function sortStack(s) {
    // If stack is not empty
    if (s.length != 0) {
        // Remove the top item
        let x = s.pop();

        // Sort remaining stack
        sortStack(s);

        // Push the top item back in sorted stack
        sortedInsert(s, x);
    }
    return s
}


console.log(sortStack([3,9,7,8,1,4,6]))