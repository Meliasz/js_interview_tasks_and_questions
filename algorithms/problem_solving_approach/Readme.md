# algorithm - A process or set of steps to accomplish a certain task

## General problem solving approach

1. Understand the Problem
⋅⋅⋅Can I restate the problem in my own words?
⋅⋅⋅What are the inputs that go into the problem?
⋅⋅⋅What are the outputs that should come from the solution to the problem?
⋅⋅⋅Can the outputs be determined from the inputs? In other words, do I have enough information to solve the problem? (You may not be able to answer this question until you set about solving the problem. That's okay; it's still worth considering the question at this early stage.)
⋅⋅⋅How should I label the important pieces of data that are a part of the problem?
2. Explore Concrete Examples
⋅⋅⋅Start with Simple Examples
⋅⋅⋅Progress to More Complex Examples
⋅⋅⋅Explore Examples with Empty Inputs
⋅⋅⋅Explore Examples with Invalid Inputs
3. Break It Down
4. Solve/Simplify
⋅⋅⋅Find the core difficulty in what you're trying to do
⋅⋅⋅Temporarily ignore that difficulty
⋅⋅⋅Write a simplified solution
⋅⋅⋅Then incorporate that difficulty back in
5. Look Back and Refactor
⋅⋅⋅Can you check the result?
⋅⋅⋅Can you derive the result differently?
⋅⋅⋅Can you understand it at a glance?
⋅⋅⋅Can you use the result or method for some other problem?
⋅⋅⋅Can you improve the performance of your solution?
⋅⋅⋅Can you think of other ways to refactor?
⋅⋅⋅How have other people solved this problem?

## Patterns

### Frequency Counter

This pattern uses objects or sets to collect values/frequencies of values

This can often avoid the need for nested loops or O(N^2) operations with arrays / strings

Example:

```javascript
same([1,2,3], [4,1,9]) // true
same([1,2,3], [1,9]) // false
same([1,2,1], [4,4,1]) // false (must be same frequency)

// (refactored and more examples in problem solving patterns)

function same(arr1, arr2){
    if(arr1.length !== arr2.length){
        return false;
    }
    let frequencyCounter1 = {}
    let frequencyCounter2 = {}
    for(let val of arr1){
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
    }
    for(let val of arr2){
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1
    }
    for(let key in frequencyCounter1){
        if(!(key ** 2 in frequencyCounter2)){
            return false
        }
        if(frequencyCounter2[key ** 2] !== frequencyCounter1[key]){
            return false
        }
    }
    return true
}

// Time Complexity - O(n)

```

### Multiple Pointers

### Sliding Window

### Divide and Conquer

### Dynamic Programming

### Greedy Algorithms

### Backtracking
