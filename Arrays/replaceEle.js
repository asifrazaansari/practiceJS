function ReplaceElements(arr, n) {

    // Hash map which will store the
    // frequency of the elements of the array.
    let mp = new Map();

    for (let i = 0; i < n; i++) {

        // Increment the frequency
        // of the element by 1.
        if (!mp.has(arr[i])) {
            mp.set(arr[i], 1);
        }
        else {
            mp.set(arr[i], mp.get(arr[i]) + 1);
        }
    }

    // Replace every element by its frequency
    for (let i = 0; i < n; ++i) {
        arr[i] = n - mp.get(arr[i]);
    }
}
