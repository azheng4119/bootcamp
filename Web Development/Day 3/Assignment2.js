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

//Array.prototype.reduce
Array.prototype.myReduce = function(cb) {
    let sum = 0;
    for (let i = 0; i < this.length; i++){
        sum = cb(sum,this[i])
    }
    return sum;
}

//standalone function
let myReduce = (arr,cb) => {
    let sum = 0;
    for (let i = 0; i < arr.length; i++){
        sum = cb(sum,arr[i])
    }
    return sum;
}

//testing for myReduce
// let reducer = (accumulator, currentValue) => accumulator + currentValue;
// console.log([1,2,3,4].myReduce(reducer));
// console.log(myReduce([1,2,3,4],reducer));

//Array.prototype.includes
Array.prototype.myIncludes = function(cb){
    for (let i = 0; i < this.length; i++){
         if (this[i] === cb) return true;
    }
    return false;
}

//standalone function
let myIncludes = (arr,cb) => {
    for (let i = 0; i < arr.length; i++){
        if (arr[i] === cb) return true;
   }
   return false;
}

//testing myIncludes
// console.log([1,2,3,4].myIncludes(1));
// console.log(myIncludes([1,2,3,4],1));

//Array.prototype.indexOf
Array.prototype.myIndexOf = function(cb){
    for (let i = 0; i < this.length; i++){
        if (this[i] === cb) return i;
   }
   return -1;
}

//standalone function
let myIndexOf = (arr,cb) => {
    for (let i = 0; i < arr.length; i++){
        if (arr[i] === cb) return i;
   }
   return -1;
}

//testif myIndexOf
// console.log([1,2,3,4].myIndexOf(1));
// console.log(myIndexOf([1,2,3,4],1));

//Array.prototype.push
Array.prototype.myPush = function(cb){
    this[this.length] = cb;
    return this.length;
}

//standalone function 
let myPush = (arr,cb) => {
    arr[arr.length] = cb;
    return arr.length;
}
//testing for myPush
// console.log([1,2,3,4].myPush(1));
// console.log(myPush([1,2,3,4],1));

//Array.prototype.lastIndexOf
Array.prototype.myLastIndexOf = function(cb){
    for (let i = this.length-1; i > -1; i--){
        if (this[i] === cb) return i;
    }
    return -1;
}

//standalone function
let myLastIndexOf = (arr,cb) => {
    for (let i = arr.length-1; i > -1; i--){
        if (arr[i] === cb) return i;
    }
    return -1;
}

//testing myLastIndexOf
// console.log([1,2,3,4,1].myLastIndexOf(1));
// console.log(myLastIndexOf([1,2,3,4,1],1));

//Object.keys
let getKeys = function(obj) {
    listofkeys = [];
    for (let x in obj){
        listofkeys.push(x);
    }
    return listofkeys;
}

let object1 = {
    a: 'somestring',
    b: 42,
    c: false
  };

console.log(getKeys(object1));

//Objects.values
let getValues = function(obj){
    listofValues = [];
    for (let x in obj){
        listofValues.push(obj[x]);
    }
    return listofValues;
}
console.log(getValues(object1));


