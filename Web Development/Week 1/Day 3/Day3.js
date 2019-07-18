//Array.prototype.filter();

const arr = [1,2,3,4,5];
// const result = arr.filter(num => num % 2 === 0);
// console.log(result);


//standalone function

function isEven(num){
    return num % 2 === 0;
}

function myFilter(arr,cb){
    let filteredArr = [];
    for (let i = 0; i < arr.length; i++){
        let element = arr[i];
        if(cb(element) === true) filteredArr.push(element);
    }
    return filteredArr;
}

//console.log(myFilter(arr,isEven));

Array.prototype.myFilter = function (cb){
    let filtered = [];
    for (let i = 0; i < this.length; i++){
        let element = this[i];
        if (cb(element) === true) filtered.push(element);
    }
    return filtered;
}

console.log(arr.myFilter(isEven));