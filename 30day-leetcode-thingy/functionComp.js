//https://leetcode.com/problems/function-composition/description/

const compose = function(functions) {
	return function(x) {
        return functions.reduceRight(function(acc, fn) {
            return fn(acc);
        }
        , x);
    };
};
