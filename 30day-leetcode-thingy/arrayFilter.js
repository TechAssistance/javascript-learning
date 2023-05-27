//Problem: https://leetcode.com/problems/filter-elements-from-array/description/

//filter is a function that takes an array and a function as arguments
//returns new array based on the function passed in
var filter1 = function(arr, fn) {
    var result = [];
    for (var i = 0; i < arr.length; i++) {
        if (fn(arr[i], i)) {
            result.push(arr[i]);
        }
    }
    return result;
};

//remove push to go brr (no more rezing array)
var filter2 = function(arr, fn) {
    var result = [];
    var j = 0; 
    for (var i = 0; i < arr.length; i++) {
        if (fn(arr[i], i)) {
            result[j] = arr[i];
            j++;
        }
    }
    return result;
};

//pre allowicate the array size to avoid rezing during filter loop
var filter3 = function(arr, fn) {
    var result = new Array(arr.length); 
    var j = 0; 
    for (var i = 0; i < arr.length; i++) {
        if (fn(arr[i], i)) {
            result[j++] = arr[i];
        }
    }
    result.length = j; 
    return result;
};

