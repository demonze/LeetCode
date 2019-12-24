/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    const arr = [...nums1, ...nums2].sort((a,b) => a - b)
    const len = arr.length
    if (len % 2 === 0) {
        return (arr[len / 2] + arr[len / 2 - 1]) / 2
    } else {
        return arr[Math.floor(len / 2)]
    }
};

console.log(findMedianSortedArrays([1,3,4], [2, 3]))