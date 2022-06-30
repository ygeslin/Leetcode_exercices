// Given the root of a binary tree, determine if it is a valid binary search tree (BST).

// A valid BST is defined as follows:

// The left subtree of a node contains only nodes with keys less than the node's key.
// The right subtree of a node contains only nodes with keys greater than the node's key.
// Both the left and right subtrees must also be binary search trees.


// Example 1:


// Input: root = [2,1,3]
// Output: true
// Example 2:


// Input: root = [5,1,4,null,null,3,6]
// Output: false
// Explanation: The root node's value is 5 but its right child's value is 4.


// Constraints:

// The number of nodes in the tree is in the range [1, 104].
// -231 <= Node.val <= 231 - 1
var isValidBST = function (root) {
    // This is the flag that will be returned
    // In the event we find a node that violates the BST property, we inverted the flag.
    let is_bst_valid = true;

    // We will also be tracking the previous node.
    // This will be used to check if the current node is greater than the previous node.
    // As a valid BST, the previous node must be less than the current node.
    let prev_node = new TreeNode(-Infinity, null, null);

    // We will traverse the tree in-order.
    // As a BST traversed in-order would result in something akin to a sorted array.
    // [1,2,3,4,5,6,7,8,9]
    // In the event we see something like this:
    // [1,2,3,4,*99,6,7,8,9,10]
    // We know it's not a valid BST.
    const in_order_traverse = (node) => {

        // Empty tree. Base case.
        if (!node || !is_bst_valid) {
            return;
        }

        // Get my left nodes.
        in_order_traverse(node.left);

        // The in order section
        // Check if the current node is greater than the previous node.
        // If not, it's a invalid tree
        if (node.val <= prev_node.val) {
            is_bst_valid = false;
        }

        // Update the previous node.
        prev_node = node;
        in_order_traverse(node.right);
    };

    in_order_traverse(root);

    // Return the flag
    return is_bst_valid;
};
