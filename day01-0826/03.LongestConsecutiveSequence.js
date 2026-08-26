/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    const set = new Set(nums)
    let maxLength = 0
    for (let num of set) {
        if (!set.has(num - 1)) {
            let curLength = 1
            while (set.has(num + 1)) {
                curLength++
                num++
            }
            maxLength = Math.max(maxLength, curLength)
        }
    }
    return maxLength
};

// 时间：O(n) 外层for限制了内层while的次数
// 空间：O(n) Set
