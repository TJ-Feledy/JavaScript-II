// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
function parent() {
  const planet = 'earth';
  console.log(planet);
  function child1() {
    const country = 'USA';
    console.log(country);
    function child2() {
      const state = 'Indiana';
      console.log(state);
    }child2();
  }child1();
}parent();
/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */


// ==== Challenge 2: Create a counter function ====
const counter = () => {
  let increment = 0;
  return () => {
    increment++;
    return increment;
  }
  
  // Return a function that when invoked increments and returns a counter variable.
}
const newCounter = counter();
console.log(newCounter());
console.log(newCounter());
console.log(newCounter());
console.log(newCounter());
console.log(newCounter());

// newCounter(); // 1
// newCounter(); // 2

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====

// console.log(newFactory.increment();
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
