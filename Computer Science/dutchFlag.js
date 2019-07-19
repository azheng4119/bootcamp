//Given an array, A and a pivot entry, pivot, in the array, rearrange the array so that all entries less than the pivot come first in the array, followed by all entries equal to the pivot, followed by all entries greater than the pivot. 

let dutchFlag = (arr,pivot) =>{
    let lessThan = [];
    let equal = [];
    let greaterThan = [];

    for (let i = 0; i < arr.length; i++){
        if (arr[i] < pivot) lessThan.push(arr[i]);
        if (arr[i] === pivot) equal.push(arr[i]);
        if (arr[i] > pivot) greaterThan.push(arr[i]);
    }

    return lessThan.concat(equal,greaterThan);
}

let arr = [7, 6, 5, 4, 4, 4, 3, 2, 1];
console.log(dutchFlag(arr,4));