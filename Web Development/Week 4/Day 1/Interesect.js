function Intersect(arr1,arr2){
    let same = [];
    for (let i = 0; i < arr1.length ; i++){
        for (let x = 0; x < arr2.length; x++){
            if (arr1[i] == arr2[x]) same.push(arr1[i])
        }
    }
    return same;
}

module.exports = Intersect;