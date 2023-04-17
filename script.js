// Functions


function sayHello() {
    console.log('Hello');
}

sayHello();

var sayBye = function() {
    console.log('Bye');
}

sayBye();

function multiply(a, b) {
    return a * b;
}

console.log(multiply(2, 10));

// Arrays

 var list = ['tiger', 'cat', 'sheep','bird'];

// to access the array values list[0]
// the pop() method is used to remove values from the end of an array
// the shift() method is used to remove values from the beginning of an array
// the push() method is used to add values to the end of an array
// the concat() method is used tojoin two arrays together


// Objects
var user = {
    name: 'John',
    age: 13,
    hobby: 'reading',
    isMarried: false,
    siblings: ['timo', 'yemi', 'tema'],
    shout: function() {
           console.log('yeeeeeeeeeeee');
    }
};

// to access the object properties all you need to do is: 
// user.name to access the name property in the user object above
// every object property is separated by commas
// add a new property to the object like this
// user.sex = 'male'; 
// an array of properties can be listed in an object
// we csn have array of objects for example:
var list = [ 
    { 
        name: 'joe',
        password: 'privste'
    },
    { 
        name: 'yame',
        password: 'postre'    
    }
];
// access yemi from the siblings array in the user object like this: user.siblings[1].
// we can also have functions in an object, the are called methods and can be accessed like this from the user example: user.shout(). 

// javascript terminology ..........
// an expression is something that produces a value eg:
// 1=3;, var a = 2;, return true;, note: expressions ends with a semicolon

// function vs method 
function isFunction() {

}
// vs method
var object = {
    isFunction: function() {

    }
}

// Loops

var todos = [
    "brush teeth",
    "excercise",
    "eat",
    "study",
    "code"
];

// The for Loop
// this code loops through the todos Array and add an exclamation point to each of the properties of the array
for (var i = 0; i < todos.length; i++) {
    console.log(todos[i] + "!");
}

// The while Loop
// this code loops through to countdown
var counter = 10;
while (counter > 0) {
    console.log(counter);
    counter--;
}