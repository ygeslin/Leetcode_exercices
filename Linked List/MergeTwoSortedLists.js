// You are given the heads of two sorted linked lists list1 and list2.

// Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists.

// Return the head of the merged linked list.



// Example 1:


// Input: list1 = [1,2,4], list2 = [1,3,4]
// Output: [1,1,2,3,4,4]
// Example 2:

// Input: list1 = [], list2 = []
// Output: []
// Example 3:

// Input: list1 = [], list2 = [0]
// Output: [0]


// Constraints:

// The number of nodes in both lists is in the range [0, 50].
// -100 <= Node.val <= 100
// Both list1 and list2 are sorted in non-decreasing order.

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
// let l1 = list1;
// let l2 = list2;
//   const result = {val : 0, next : null};
//  let cur = result;
//  while(l1 && l2){
//      if(l1.val < l2.val){
//          cur.next = l1;
//          l1 = l1.next;
//      } else {
//          cur.next = l2;
//          l2 = l2.next;
//      }
//      cur = cur.next;
//  }
//  cur.next = l1 || l2;
//  return result.next;

  const ret = new ListNode();
  let current = ret

  while (list1 && list2)
  {
      if (list1.val < list2.val)
      {
          current.next = list1;
          list1 = list1.next;
      }
      else
      {
          current.next = list2
          list2 = list2.next;
      }
      current = current.next
  }
  current.next = list1 || list2
  return ret.next;


//const head = new ListNode(null);
//  let curr = head;
//  while (l1 && l2) {
//      if (l1.val < l2.val) {
//          curr.next = l1;
//          l1 = l1.next;
//      } else {
//          curr.next = l2;
//          l2 = l2.next;
//      }
//      curr = curr.next;
//  }
//  curr.next = l1 || l2;
//  return head.next;


};