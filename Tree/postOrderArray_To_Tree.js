
var n;

// to store tree nodes
class Tree {
    constructor(_val, _leftchild, _rightchild) {
        this.val = _val;
        this.leftchild = _leftchild;
        this.rightchild = _rightchild;
    }
};

// Function to generate binary tree
// from given postorder traversal sequence
// and leaf or non-leaf node information.
function createBinaryTree(post, isLeaf) {
    // Base condition
    if (n < 0) {
        return null;
    }
    var root = new Tree(post[n], null, null);
    var isInternalNode = !isLeaf[n];
    n--;

    // If internal node creating left and
    // right child
    if (isInternalNode) {
        root.rightchild = createBinaryTree(post,
            isLeaf);
        root.leftchild = createBinaryTree(post,
            isLeaf);
    }
    return root;
}

// Function to print in-order traversal
// of a binary tree.
function inorder(root) {
    if (root == null) {
        return;
    }
    inorder(root.leftchild);
    console.log(root.val + " ");
    inorder(root.rightchild);
}

// Driver code
var post = [4, 5, 2, 6, 7, 3, 1];
var isLeaf = [true, false, true,
    true, false, false];
n = post.length - 1;

var root = createBinaryTree(post, isLeaf);
console.log(inorder(root))



