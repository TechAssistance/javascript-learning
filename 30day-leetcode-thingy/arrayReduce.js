//Problem: https://leetcode.com/problems/array-reduce-transformation/description/

var reduce = function(nums, fn, init) {
    if (nums.length === 0) {
        return init;
    }
    accum = init;
    for (var i = 0; i < nums.length; i++) {
        accum = fn(accum, nums[i]);
    }
    return accum;
};

// cache the array length to avoid rechecking length on each iteration
// declare using const to avoid reassigning (const oddly runs faster than var and let)
// tryout function syntax
// [57ms but 41MB]
const reduce2 = (nums, fn, init) => {
    const length = nums.length;
    if (length === 0) return init;
    let accum = init;
    for (let i = 0; i < length; i++) {
        accum = fn(accum, nums[i]);
    }
    return accum;
};

// switch back to function declaration syntax (this gave fastest results) [53ms but 42MB]
const reduce3 = function(nums, fn, init) {
    const length = nums.length;
    if (length === 0) return init;
    let accum = init;
    for (let i = 0; i < length; i++) {
        accum = fn(accum, nums[i]);
    }
    return accum;
}
