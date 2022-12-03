let nums1 = [1, 2, 3, 0, 0, 0], m = 3, nums2 = [2, 5, 6], n = 3

const merge = function (nums1, m, nums2, n) {
    let r = m + n - 1, p = m - 1, q = n - 1
    while (q >= 0) {
        if (p >= 0 && nums1[p] > nums2[q]) {
            nums1[r] = nums1[p]
            r--
            p--
        } else {
            nums1[r] = nums2[q];
            r--;
            q--;
        }
    }
    return nums1
}

console.log(merge(nums1, m, nums2, n))

/*
//Merge Two Sorted Arrays
let a1 = [2, 3, 5, 7, 8, 0, 0, 0, 0]
let n1 = 5
let a2 = [1, 4, 8, 9]
let n2 = 4

const func = (a1, a2, n1, n2) => {

    let r = n1 + n2 - 1;
    let p = n1 - 1;
    let q = n2 - 1;

    console.log(a1);

    while (q >= 0) {

        if (p >= 0 && a1[p] > a2[q]) {
            a1[r] = a1[p];
            r--;
            p--;
        }

        else {
            a1[r] = a2[q];
            r--;
            q--;
        }
    }
    console.log(a1);
}
*/