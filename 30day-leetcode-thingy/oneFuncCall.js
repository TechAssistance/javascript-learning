//https://leetcode.com/problems/allow-one-function-call/

const once = function (fn) {
    let called = false;
    return function () {
        if (!called) {
            called = true;
            return fn.apply(this, arguments);
        }
    }
}
