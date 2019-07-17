//Array.prototype.forEach()
Array.prototype.myEach = function(cb) {
    for (let i = 0; i < this.length; i++){
       console.log(cb(this[i]));
    }
}

//standalone function
function myEach(arr,cb){
    for (let i = 0; i < arr.length; i++){
        console.log(cb(arr[i]));
     }
}
//testing forEach
// let isEven = num => num%2 === 0;
// [1,2,3,4].myEach(isEven);
// myEach([1,2,3,4],isEven);

//Array.prototype.map
Array.prototype.myMap = function(cb){
    let mapped = [];
    for (let i = 0; i < this.length; i++){
        mapped.push(cb(this[i]));
     }
     return mapped;
}

//standalone function
let myMap = (arr,cb) => {
    let mapped = [];
    for (let i = 0; i < arr.length; i++){
        mapped.push(cb(arr[i]));
     }
     return mapped;
}
//testing map
// let doubleNum = num => num*2;
// console.log([1,2,3,4].myMap(doubleNum));
// console.log(myMap([1,2,3,4],doubleNum));

//Array.prototype.filter
Array.prototype.myFilter = function(cb){
    let filtered = [];
    for (let i = 0; i < this.length;i++){
        if (cb(this[i]) === true) filtered.push(this[i]);
    }
    return filtered;
}

//standalone function
let myFilter = (arr,cb) =>{
    let filtered = [];
    for (let i = 0; i < arr.length;i++){
        if (cb(arr[i]) === true) filtered.push(arr[i]);
    }
    return filtered;
}
//testing myFilter
// let isOdd = num => num%2 === 1;
// console.log([1,2,3,4].myFilter(isOdd));
// console.log(myFilter([1,2,3,4],isOdd));

//Array.prototype.some
Array.prototype.mySome = function(cb) {
    for (let i = 0; i < this.length; i++){
        if (cb(this[i])) return true;
    }
    return false;
}

//standalone function
let mySome = (arr,cb) => {
    for (let i = 0; i < arr.length; i++){
        if (cb(arr[i])) return true;
    }
    return false;
}

//test for mySome
// let isOdd = num => num%2 === 1;
// console.log([1,2,3,4].mySome(isOdd));
// console.log(mySome([1,2,3,4],isOdd));

//Array.prototype.every
Array.prototype.myEvery = function(cb) {
    for (let i = 0; i < this.length; i++){
        if (!cb(this[i])) return false;
    }
    return true;
}

//standalone function
let myEvery = (arr,cb) => {
    for (let i = 0; i < arr.length; i++){
        if (!cb(arr[i])) return false;
    }
    return true;
}

//test for myEvery
// let isOdd = num => num%2 === 1;
// console.log([1,2,3,4].myEvery(isOdd));
// console.log(myEvery([1,2,3,4],isOdd));