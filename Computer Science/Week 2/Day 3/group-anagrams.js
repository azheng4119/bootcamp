/**
 * @param {string[]} strs
 * @return {string[][]}
 */
let groupAnagrams = function(strs) {
    let anagrams = [];
    let hash = {};
    let x = 0;
    for (let str of strs){
        let sorted = str.split("").sort().join();
        if (sorted in hash){
            anagrams[hash[sorted]].push(str);
        }else{
            hash[sorted] = x;
            anagrams.push([str]);
            x++;
        }
    }
    return anagrams;
};