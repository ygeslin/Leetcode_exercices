
// Given the head of a singly linked list, reverse the list, and return the reversed list.



// Example 1:


// Input: head = [1,2,3,4,5]
// Output: [5,4,3,2,1]
// Example 2:


// Input: head = [1,2]
// Output: [2,1]
// Example 3:

// Input: head = []
// Output: []


// Constraints:

// The number of nodes in the list is the range [0, 5000].
// -5000 <= Node.val <= 5000


// Follow up: A linked list can be reversed either iteratively or recursively. Could you implement both?
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    let current = head;
    let a = []
    while (current)
        {
            a.push(current.val)
            current = current.next;
        }
    a = a.reverse()
    current = head
    let i = 0;

    while (current)
        {
            current.val = a[i++]
            current = current.next;
        }
    return head

        // End of the reversed linked list set to null
//    let prev = null;

    // Traverse through the given linked list
 //   while (head) {
  //      const temp = head.next;     // References the next Node of given linked list
   //     head.next = prev;       // head.next point to previous Node, instead of the next Node of the given linked list
    //    prev = head;        // Move the prev Node pointer up to head
     //   head = temp;        // Move the head up to next Node of the given linked list
    //}

    // Prev is the reversed linked list
    //return prev;

//        let [prev, current] = [null, head]
 //   while(current) {
  //      [current.next, prev, current] = [prev, current, current.next]
   // }
   // return prev
};