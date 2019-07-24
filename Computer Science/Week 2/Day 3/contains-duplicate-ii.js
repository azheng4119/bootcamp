let duplicates = (arr,k) =>{
    let hash = {};
    let x = 0;
    for (let i of nums){
        if (i in hash){
            if (Math.abs(hash[i]-x) <= k) return true;
        }
        hash[i] = x;
        x++;
    }
    return false;
}

console.log(duplicates([1,2,3,1,2,3],2));