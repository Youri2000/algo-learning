/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let maxLength = 0
    const set = new Set()
    let slow = 0, fast = 0

    for (; fast < s.length; fast++) {
        if (set.has(s[fast])) {
            while (set.has(s[fast])) {
                set.delete(s[slow]) // 很关键，删除最左边，保持连续
                slow++
            }
            set.add(s[fast])
        } else {
            set.add(s[fast])
            maxLength = Math.max(maxLength, fast - slow + 1)
        }
    }
    return maxLength
};

// O(n)
// O(n)

