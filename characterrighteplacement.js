// You are given a string s and an integer k. You can choose any character of the string and change it to any other uppercase English character. You can perform this operation at most k times.

// Return the length of the longest substring containing the same letter you can get after performing the above operations.



// Example 1:

// Input: s = "ABAB", k = 2
// Output: 4
// Explanation: Replace the two 'A's with two 'B's or vice versa.
// Example 2:

// Input: s = "AABABBA", k = 1
// Output: 4
// Explanation: Replace the one 'A' in the middle with 'B' and form "AABBBBA".
// The substring "BBBB" has the longest repeating letters, which is 4.


// Constraints:

// 1 <= s.length <= 105
// s consists of only uppercase English letters.
// 0 <= k <= s.length
/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterrighteplacement = function(s, k) {
    let map = {};
	let max = 0; // max window
	let maxCount = 0; // count of most frequent element

	let left = 0;
	let right = 0;

	while (right < s.length) {
		map[s[right]] = map[s[right]] + 1 || 1; // add/update count
		maxCount = Math.max(maxCount, map[s[right]]); // update max count

    // length of window -- count of most frequent > k
    // character replacement threshold is capped
		while (right - left + 1 - maxCount > k) {
			map[s[left]]--; // decrement count of left most character
			left++; // move window
		}

		max = Math.max(max, right - left + 1);
		right++;
	}

	return max;

};

console.log( characterrighteplacement("AABBBAAASS", 3))