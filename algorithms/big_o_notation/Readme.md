# Big O Notation

## O(1) - function with constant number of operations

```javascript
// example

function addUpTo(n) {
  return n * (n + 1) / 2;
}

// Always 3 operations
```

## O(1) - function with **n** operations

```javascript
// example 1
function addUpTo(n) {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += i;
  }
  return total;
}

// example 2
function countUpAndDown(n) {
  for (let i = 0; i < n; i++) {
    console.log(i);
  }
  for (let j = n - 1; j >= 0; j--) {
    console.log(j);
  }
}

```

## O(n*n) - O(n) operation inside of an O(n) operation

```javascript
// example
function printAllPairs(n) {
  for (var i = 0; i < n; i++) {
    for (var j = 0; j < n; j++) {
      console.log(i, j);
    }
  }
}

// quadratic

```

## Performance chart

![alt text](/algorithms/big_o_notation/img/o_notation_chart.jpg "Performance")

## Big O Shorthands

1. Arithmetic operations are constant
2. Variable assignment is constant
3. Accessing elements in an array (by index) or object (by key) is constant
4. In a loop, the the complexity is the length of the loop times the complexity of whatever happens inside of the loop

## Space Complexity in JS

1. Most primitives (booleans, numbers, undefined, null) are constant space
2. Strings require O(n) space (where n is the string length)
3. Reference types are generally O( n), where n is the length (for arrays) or the number of keys (for objects)

## logarithm

The logarithm of a number roughly measures the number of times you can divide that number by 2 before you get a value that's less than or equal to one.

Example: log(8) = 3, log(25) ≈ 4.64
