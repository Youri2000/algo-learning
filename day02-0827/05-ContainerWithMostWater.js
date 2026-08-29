/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let left = 0, right = height.length - 1
    let maxValue = 0
    while (left < right) {
        maxValue = Math.max(maxValue, (right - left) * Math.min(height[left], height[right]))
        if (height[left] < height[right]) {
            left++
        } else {
            right--
        }
    }
    return maxValue
};

//  O(n)
// O(1)