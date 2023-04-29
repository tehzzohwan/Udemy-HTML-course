
// For all of these, what is the value of a when the function gets called with the alert()
// #1
function q1() {
    var a = 5;
    if(a > 1) {
        a = 3;
    }
    alert(a);
    // 3
}

//#2
var a = 0;
function q2() {
    a = 5;
}

function q22() {
    alert(a);
    // 0, cos a is not defined in the child scope its takes a value defined as a in the window (root scope).
    // but when you run q2() first a is now defined as 5 :. alert(a) would return 5.
}


//#3
function q3() {
    window.a = "hello";
}


function q32() {
    alert(a);
    // a is equals to hello but only in the window
    // so alert(a) will return an error
    // but when you run q3() first then q32() will return "hello"
}

//#4
var a = 1;
function q4() {
    var a = "test";
    alert(a);
    // a = 'test' cos a is  being defined in the child scope as "test"
}

//#5
var a = 2;
if (true) {
    var a = 5;
    alert(a);
}
alert(a); 
// a = 5
