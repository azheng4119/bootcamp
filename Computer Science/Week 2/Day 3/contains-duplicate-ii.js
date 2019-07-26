let duplicates = (arr,k) =>{
    let hash = {};
    for (let i = 0; i < nums.length; i++){
        if (Math.abs(hash[nums[i]]-i) <= k) return true;
        hash[nums[i]] = i;
    }
    return false;
}

console.log(duplicates([1,2,3,1,2,3],2));