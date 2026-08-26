/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    // 找key，分组
    const map = new Map()
    for (let i = 0; i < strs.length; i++) {
        const mapStr = strs[i].split('').sort().join('')
        if (map.has(mapStr)) {
            map.get(mapStr).push(strs[i])
        } else {
            map.set(mapStr, [strs[i]])
        }
    }
    return [...map.values()]
};

// 时间：O(n * k logk)
// 空间：O(n)