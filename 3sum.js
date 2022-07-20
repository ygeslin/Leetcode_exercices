var threeSum = function (nums) {
	let res = [];
	nums = nums.sort((a, b) => a - b);
	for (let i = 0; i < nums.length; i++) {
		// can't be the same as the previous value
		if (i > 0 && nums[i] === nums[i - 1]) {
			continue;
		}
		let begin = i + 1;
		let end = nums.length - 1;
		while (begin < end) {
			let sum = nums[i] + nums[begin] + nums[end];
			if (sum < 0) {
				begin++;
			} else if (sum > 0) {
				end--;
			} else {
				res.push([nums[i], nums[begin], nums[end]]);
				begin++;
				//keep looking for the next one that is not equal the previous and lower than right
				while (nums[begin] === nums[begin - 1] && begin < end) {
					begin++;
				}
			}
		}
	}
	return res;
};
