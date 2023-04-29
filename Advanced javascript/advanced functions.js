// Closures - a function ran. the function executed. IT's never going to ececute again.
// but it's not going to remember that there  are references to those scope
// so the child scope a;ways has access to the parent scope.

const first = () => {
    const greet = 'Hi';
   const second = () =>{
    alert(greet);
    }
    return second;
}

const  newFunc =  first();

newFunc();


// Currying - is the process of converting a function that takes multiple 
// arguments into function that takes them one at a time.
const multiply = (a, b) => a * b;
const curriedMultiply = (a) => (b) => a * b;


// Compose - is the act of putting two functions together to form a third function
// where the output of one funtion is the input of the other .
const compose = (e, h) => (l) => e(h(l));

const sum = (num) => num + num ;

compose(sum , sum)(5);

// as a developer always have it in mind to 
// create functions that minimizes side effect and have functional purity
// it's called DETERMINISM where anythiing you put into the function 
// it will always return the same thing.