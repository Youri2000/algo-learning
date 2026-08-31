/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    const res = []

    nums.sort((a, b) => a - b)

    for (let i = 0; i < nums.length - 2; i++) {
        // 去重1
        if (i > 0 && nums[i] === nums[i - 1]) continue

        let j = i + 1, k = nums.length - 1
        while (j < k) {
            const sum = nums[j] + nums[k] + nums[i]
            if (sum === 0) {
                res.push([nums[i], nums[j], nums[k]])
                // 去重2
                while (j < k && nums[j + 1] === nums[j]) j++ // 注意条件顺序
                while (j < k && nums[k - 1] === nums[k]) k--
                j++ // 别漏写
                k--

            } else if (sum < 0){
                j++
            } else {
                k--
            }
        }
    }
    return res
};

// O(n2)
// O(1)