// * Write a function that reverses a string. The input string is given as an array of characters s.

// * You must do this by modifying the input array in-place with O(1) extra memory.



// * Example 1:

// * Input: s = ["h","e","l","l","o"]
// * Output: ["o","l","l","e","h"]
// * Example 2:

// * Input: s = ["H","a","n","n","a","h"]
// * Output: ["h","a","n","n","a","H"]


// * Constraints:

// * 1 <= s.length <= 105
// * s[i] is a printable ascii character.
// *    Hide Hint #1
// * The entire logic for reversing a string is based on using the opposite directional two-pointer approach!
/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
     let i = 0, j = s.length - 1;
  while (i < j) {
    // * ES6 destructuring assignment
    [s[i], s[j]] = [s[j], s[i]];
    i++;
    j--;
  }
// let start = 0;
// let end = s.length - 1
// for (; start < end;start++, end--)
// {
//     [s[start], s[end]] = [s[end],s[start]]
//}
};