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

let swapFunc = (arr,index1,index2) =>{
    let temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] =  temp;
}

let dutchFlag2 = (arr,pivot) =>{
    let start = 0;
    let end = arr.length-1;
    for (let i = 0; i <= end;i++){
        if (arr[i] > pivot){
            swapFunc(arr,i,end);
            end--;
        }
        if(arr[i] < pivot){
            swapFunc(arr,i,start)
            start++;
        }
    }
    return arr;
    
}
let arr = [7, 6, 5, 4, 4, 4, 3, 2, 1];
let arr2 = [0, 1, 2, 3, 4, 5, 6];
console.log(dutchFlag2(arr,5));