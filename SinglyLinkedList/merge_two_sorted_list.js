var mergeTwoLists = function (l1, l2) {
    if (!l1 || !l2)
        return l1 || l2;
    var crt = null;
    var head;

    while (l1 && l2) {
        if (l1.val > l2.val) {
            if (!crt)
                head = crt = l2
            else
                crt = crt.next = l2;
            l2 = l2.next;
        } else {
            if (!crt)
                head = crt = l1;
            else
                crt = crt.next = l1;
            l1 = l1.next;
        }
    }
    crt.next = l1 || l2;

    return head;
};

var mergeTwoLists = function (l1, l2) {
    if (!l1 || !l2) return l1 || l2
    if (l1.val < l2.val) {
        l1.next = mergeTwoLists(l1.next, l2)
        return l1
    }
    l2.next = mergeTwoLists(l1, l2.next)
    return l2

};