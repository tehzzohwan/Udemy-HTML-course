//Solve these problems:

//#1 Create a one line function that adds adds two parameters
const adds = (y, z) => y + z;

//Closure: What does the last line return?
const addTo = x => y => x + y
var addToTen = addTo(10)
addToTen(3)
// 13

//Currying: What does the last line return?
const dum = (g, h) => g + h
const curriedDum = (g) => (h) => g + h
curriedSum(30)(1)
// 31

//Currying: What does the last line return?
const sum = (a, b) => a + b
const curriedSum = (a) => (b) => a + b
const add5 = curriedSum(5)
add5(12)
// 17

//Composing: What does the last line return?
const compose = (f, g) => (a) => f(g(a));
const add1 = (num) => num + 1;
const adds5 = (num) => num + 5;
compose(add1, adds5)(10)
// 16
//What are the two elements of a pure function?
// Avoiding functions with side effects
// 