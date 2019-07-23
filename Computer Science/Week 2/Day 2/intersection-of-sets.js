/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    let arr = [];
    let hash = {};
    for (let i of nums1) hash[i] = true;
    for (let x of nums2) {
        if(hash[x]) {
            arr.push(x);
            hash[x] = false;
        }
    }
    return arr;
};