// Destructuring
const obj = {
    player: "Bobby",
    experience: 100,
    wizardLevel: false
}

// we access the object properties usually like this:
// const player = obj.player;
// const experience = obj.experience;
// let wizardLevel = obj.wizardLevel;

// but can be destructured like this:
const { player, experience } = obj;
let { wizardLevel } = obj;



// Object properties
const who = 'john snow'

const objt = {
    [who]: 'hello',
    [1 + 2]: 'hihi'
}



// Template strings
const name = 'Sally';
const age = 40;
const pet = 'bunny';
// instead of  the usual single or double quote for strings we'll use 
// back quote for strings, that way we can create template strings easily.
const greeting = `Hello ${name} you seem to be ${age - 20} years old, we heard you've got a white ${pet}.`


// default argument 
function greet(name="", age="30", pet="cat") {
    return `Hello ${name} you seem to be ${age - 20} years old, we heard you've got a white ${pet}.`
}
// without  inserting a agument the function would run 
// except that there would be no name, but when arguments are passed in the function it fits them into the template.


// Symbol
// symbol value is used as an indentifier mostly for object properties 
let sym1 = Symbol();
let sym2 = Symbol('foo');
let sym3 = Symbol('foo');

// when you run sym2 === sym3 in your console it returns false regardlesss of having the same values

// Arrow functions
// instead of
function add(a,b) {
    return a + b;
}
// an arrow function makes it all easy
const add2 = (a, b) => a + b;