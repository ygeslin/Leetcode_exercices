
// Given two strings s1 and s2, return true if s2 contains a permutation of s1, or false otherwise.

// In other words, return true if one of s1's permutations is the substring of s2.



// Example 1:

// Input: s1 = "ab", s2 = "eidbaooo"
// Output: true
// Explanation: s2 contains one permutation of s1 ("ba").
// Example 2:

// Input: s1 = "ab", s2 = "eidboaoo"
// Output: false


// Constraints:

// 1 <= s1.length, s2.length <= 104
// s1 and s2 consist of lowercase English letters.
var checkInclusion = function(s1, s2) {
    // Build a cache of the existing letter counts we need to match
	// An array that maps to each letter index is faster but a little harder to implement, can be done with `letter.charCodeAt(0)` if you want to convert this
    const keys = {};
    const s1N = s1.length;
    for (let i = 0; i < s1N; i++) {
        const letter = s1[i];
        keys[letter] = (keys[letter] || 0) + 1;
    }

	// Track existing matches in our sliding window
    const matchCount = {};
    const s2N = s2.length;

	// Pointers used to slide a window of possible solutions
    let left = 0;
    let right = 0;

    while (right < s2N) {
        const letter = s2[right];

		// Track the new letter
        matchCount[letter] = (matchCount[letter] || 0) + 1;

		// Remove all letters that exceed our letter count by bumping up the left pointer
        while (matchCount[letter] > (keys[letter] || 0)) {
            matchCount[s2[left]] -= 1;
            left++;
        }

		// Get the window length and exit early if we have a match
        if (right - left + 1 === s1N) return true;

		// Increment the right to increase the window size
        right++;
    }

	// No match was found, exit early
    return false;
};

function checkInclusion(s1, s2) {
	// Create a map of s1 chars
	const map = new Map();
	for (let i = 0; i < s1.length; i++)
		map.set(s1[i], map.get(s1[i]) + 1 || 1);

	for (let start = 0, end = s1.length - 1; end < s2.length; start++, end++) {
		// Move window until both start & end chars match
		if (!map.has(s2[start]) || !map.has(s2[end])) continue;

		// Check chars inside the window
		let i = start;
		do {
			map.set(s2[i], map.get(s2[i]) - 1);
			i++;
		} while (i <= end && map.get(s2[i]));

		// Check if all chars were in the window
		if (i > end) return true;

		// Reset the map if any chars in the window didn't match
		for (let j = start; j < i; j++)
			map.set(s2[j], map.get(s2[j]) + 1);
	}

	return false;
}
var checkInclusion = function(s1, s2) {
	// in order to consider a string "x" a permutation of string "y" they must meet 2 metrics:
	//    1) they must have the same length.
	//    2) each character present must have the same amount of occurrences (or "frequency") in both strings.

	// stores the required amount of occurrences for each character to consider any substring a permutation of s1
	// this dictionary will have at most 26 elements, one entry for each alphabet letter.
    const expectedFrequencies = {};
    for (let i = 0; i < s1.length; i++) {
        expectedFrequencies[s1[i]] = (expectedFrequencies[s1[i]] || 0) + 1;
    }

	// stores the current amount of occurrences of each character while iterating
    const curFrequencies = {};

	// remaining amount of unique characters that are yet to meet the required amount of occurrences
	// defined in expectedFrequencies.
    let remainingChars = Object.keys(expectedFrequencies).length;

	// place our right pointer at the first position, and "lag" or delay our left pointer by "length of s1" slots.
    let l = 0 - (s1.length - 1);
    let r = 0;

	// O(n) time complexity
    while (r < s2.length) {
		// check if it's one of our needed characters
        if (s2[r] in expectedFrequencies) {
			// increase our current frequency for this character
            curFrequencies[s2[r]] = (curFrequencies[s2[r]] || 0) + 1;

			// check if we have arrived to our desired frequency, if so, reduce by 1 the remaining characters counter.
            if (curFrequencies[s2[r]] === expectedFrequencies[s2[r]]) {
                remainingChars--;

				// check there're no more remaining characters, if so, they have all reached the expected frequency
                if (remainingChars === 0) { return true; }
            }
        }

		// index position stored in l variable contains the first element of the current substring.
		// at this point, it's about to fall behind in the next iteration.
		// we need to update our state to keep up with this upcoming change.
		// first, make sure it's a character that we care about (of course present in s1)
        if (curFrequencies[s2[l]] > 0) {
			// check if the frequency for this character had previously reached our target.
			// if it did, we need to undo the remainingChars-- operation.
            if (curFrequencies[s2[l]] === expectedFrequencies[s2[l]]) {
				// it's now time to mark this character as 'missing' again...
                remainingChars++;
            }

			// make sure to decrement the frequency of the left character
			// once the sliding window moves to the right, it will be long gone
            curFrequencies[s2[l]]--;
        }

		// advance our sliding window
        l++;
        r++;
    }

    return false;
};
//  s1 = "ab", s2 = "eidbaooo"
var checkInclusion = function (s1, s2) {
	// If s1 is larger than s2 then match is not possible
	// i.e (s1 cannot be substring of s2)
	if (s1.length > s2.length) return false;
	let neededChar = {}; //To Store the frequency/count of required string s1
	for (let i = 0; i < s1.length; i++) {
		// Initially neededChar[s1[i]] will be undefined and
		// undefined || 0 will return 0. So we increment it by 1
		neededChar[s1[i]] = (neededChar[s1[i]] || 0) + 1;
	}
	/*
	Now we have neededChar
	i.e neededChar={
		a:1,
		b:1
	}
	*/
	let left = 0, //left pointer/index of the sliding window
		right = 0, //right pointer/index of the sliding window
		requiredLength = s1.length //length of the substring required in s2

	// Now iterate until the right index of window is lesser than length of s2
	while (right < s2.length) {
		// If we found s2 character in s1 i.e in neededChar then we decrease requiredLength
		if (neededChar[s2[right]] > 0) requiredLength--;
		// Since we have encountered new char i.e s2[right] we decrease it's
		// count in neededChar even if it is not present in neededChar because we only care about neededChars
		neededChar[s2[right]]--;
		right++ //window is incremented by 1 step

		// Now if our requiredLength becomes 0 it means we have found a match of the s2 substring
		// So we return true
		if (requiredLength === 0) return true;

		// If our window length is equal to s1 length (length of string to search in s2)
		// then we have to remove left element of window i.e left++ and add new element from right
		// will be added in next iteration
		if (right - left === s1.length) {
			// if the left element we are removing was a required character then we increase requiredLength
			// because that element will no longer be the part of sliding window
			if (neededChar[s2[left]] >= 0) requiredLength++;
			// We will also increase the count of left element removed from window
			neededChar[s2[left]]++;
			// And finally we will decrease the window size by 1 from left i.e left++
			left++
		}
	}
	// If match was not found we return false
	return false;
};