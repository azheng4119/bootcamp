let dupes = arr =>{
    let hash = {};
    for (let i of arr){
        if (hash[i] == 1){
            return true;
        }else{
            hash[i] = 1;
        }
    }
}