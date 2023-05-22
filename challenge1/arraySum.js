function calcSum(arr){
    //get sum of array
    return arr.reduce((callbackAccumulatedValue,currentValue) => callbackAccumulatedValue+currentValue, 0);
}

arrayboi = [1,2,3,4,5,6,7,8,9,10];
console.log(calcSum(arrayboi));
