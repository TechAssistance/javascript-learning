function calcSum(arr){
    //get sum of array
    return arr.reduce((callbackAccumulatedValue,currentValue) => callbackAccumulatedValue+currentValue, 0);
}

function calcSum2(arr){
    //get sum of array w/o reduce
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
        sum += arr[i];
    }
    return sum;
}
    

arrayboi = [1,2,3,4,5,6,7,8,9,10];
console.log(calcSum(arrayboi));
console.log(calcSum2(arrayboi));
