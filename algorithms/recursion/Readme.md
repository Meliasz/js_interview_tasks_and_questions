# Recursion

## A process (a function) that calls itself

Function invokes the same function with a different input until you reach your base case

## Helper method recursion pattern

Example 1:

```javascript

function outer(input){

    var outerScopedVariable = []

    function helper(helperInput){
        // modify the outerScopedVariable
        helper(helperInput--)
    }

    helper(input)

    return outerScopedVariable;

}

```

Example 2

```javascript

function collectOddValues(arr){

    let result = []

    function helper(helperInput){
        if(helperInput.length === 0) {
            return;
        }

        if(helperInput[0] % 2 !== 0){
            result.push(helperInput[0])
        }

        helper(helperInput.slice(1))
    }

    helper(arr)

    return result;

}

```

## Pure recursion

Example:

```javascript

function collectOddValues(arr){
    let newArr = [];

    if(arr.length === 0) {
        return newArr;
    }

    if(arr[0] % 2 !== 0){
        newArr.push(arr[0]);
    }

    newArr = newArr.concat(collectOddValues(arr.slice(1)));
    return newArr;
}

```

### Pure recursion tips

1. For arrays, use methods like slice, the spread operator, and concat that make copies of arrays so you do not mutate them
2. Strings are immutable so you will need to use methods like slice, substr, or substring to make copies of strings
3. To make copies of objects use Object.assign, or the spread operator

## Big O

1. Measuring time complexity is relatively simple. You can measure the time complexity of a recursive function as then number of recursive calls you need to make relative to the input
2. Measuring space complexity is a bit more challenging. You can measure the space complexity of a recursive function as the maximum number of functions on the call stack at a given time, since the call stack requires memory.

## Tail call optimization

Function's calls without growing the call stack

### Support proper tail calls as described in the ES5 specification (26th March 2020)

Only Safari

### Examples

```javascript

// Tail call example

(function(){
    function fib(n, sum=0, prev=1) {
      if (n <= 1) return sum;
      return fib(n-1, prev+sum, sum);
    }
    console.log(fib(20000));
})();

// No tail call example

function fib(n) {
    if (n <= 0) return 0;
    if (n === 1 || n === 2) return 1;
    return fib(n-1) + fib(n-2);
}
console.log(fib(20000)); //ERROR: maximum call stack size exceeded

// Non-recursive tail optimization
(function wrapperFunction(){
    console.log("Executing in the Wrapper Function");
    function functionA(a,b,c) {
        console.log("Executing in Function A");
        return functionC(10,11);  //Now a tail-call
    }
    function functionB(d,e,f) {
        console.log("Executing in Function B");
        return;
    }
    function functionC(g,h) {
        console.log("Executing in Function C");
        return;
    }
    functionA(20, 40, 60);
    functionB(15, 25, 35);
    functionC(17, 22, 27);
})();

```
