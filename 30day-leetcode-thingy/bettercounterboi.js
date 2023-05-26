//problem: https://leetcode.com/problems/counter-ii/description/

function createCounter(init) {
    const start = init;
    return {
      increment() {
        init++;
        return init;
      },
      decrement() {
        init--;
        return init;
      },
      reset() {
        init = start;
        return init;
      }
    };
}

const counter = createCounter(10);
console.log(counter.increment());
console.log(counter.increment());
console.log(counter.decrement());
console.log(counter.reset());
