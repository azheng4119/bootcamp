var firstUniqChar = function(s) {
    let hash = {};
    for (let i = 0; i < s.length; i++){
        console.log(i,s[i],hash[s[i]]);
        if (hash[s[i]]) {
            return i-1;
        }
        else{
            hash[s[i]] = true;
        }
    }
    return s.length-1;
};

let spliting = string =>{
    let s1 = [];
    let s2 = "";
    for (let i of string){
        s2+=i;
        if(i == '*') {
            s1.push(s2);
            s2 = "";
        }
        else{
            if (s2.length === 1) {
                s1.push(s2);
                s2 ="";
            }
        }
    }
    return s1;

}

console.log(spliting(['a*b*b']));