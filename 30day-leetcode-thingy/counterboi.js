//Problem: https://leetcode.com/problems/counter/description/

function counter(init){
    let count = 0;
    return function(){
        if(count === 0){
            count++;
            return init;
        }else{  
            init++;
            return init;
        }
    }
}
