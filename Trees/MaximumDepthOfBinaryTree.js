// Given the root of a binary tree, return its maximum depth.

// A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.



// Example 1:


// Input: root = [3,9,20,null,null,15,7]
// Output: 3
// Example 2:

// Input: root = [1,null,2]
// Output: 2


// Constraints:

// The number of nodes in the tree is in the range [0, 104].
// -100 <= Node.val <= 100
// *Solution 1: non-recursive

// var maxDepth = function(root) {
//     if (!root) return 0;
//     const queue = [root];
//     let depth = 0;
//     while (queue.length !== 0) {
//         depth++;
//         const len = queue.length;
//         for (let i = 0; i < len; i++) {
//             if (queue[i].left) queue.push(queue[i].left);
//             if (queue[i].right) queue.push(queue[i].right);
//         }
//         queue.splice(0, len);
//     }
//     return depth;
// };
// *Solution 2: recursive

var maxDepth = function(root) {
    if (!root) return 0;
    return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
};