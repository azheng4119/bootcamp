function difference(arr1,arr2){
    let hash = {};
    for (item of arr1){
        hash[item] = 1;
    }
    for (item of arr2){
        if (item in hash) hash[item]++;
        else{
            hash[item] = 1;
        }
    }
    return Object.keys(hash).filter(item =>hash[item] == 1);
}

module.exports = difference;