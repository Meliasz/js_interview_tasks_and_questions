

// Implement a function called, areThereDuplicates which accepts a variable number of arguments, and checks whether there are any duplicates among the arguments passed in.

// areThereDuplicates(1, 2, 3) // false
// areThereDuplicates(1, 2, 2) // true 
// areThereDuplicates('a', 'b', 'c', 'a') // true 

// Frequency Counter pattern
function areThereDuplicates() {
  let collection = {}
  for(let val in arguments){
    collection[arguments[val]] = (collection[arguments[val]] || 0) + 1
  }
  for(let key in collection){
    if(collection[key] > 1) return true
  }
  return false;
}

// Multiple Pointers pattern
function areThereDuplicates(...args) {
  // Two pointers
  args.sort((a,b) => a > b);
  let start = 0;
  let next = 1;
  while(next < args.length){
    if(args[start] === args[next]){
        return true
    }
    start++
    next++
  }
  return false
}

// One Liner Solution
function areThereDuplicates() {
  return new Set(arguments).size !== arguments.length;
}

// Meliasz
function areThereDuplicates(...args) {
    let obj = {};
    for (let i = 0; i < args.length; i++) {
        obj[args[i]] = (obj[args[i]] || 0) + 1;
        if(obj[args[i]] > 1) {
            return true;
        }
        
    }
    return false;
   }