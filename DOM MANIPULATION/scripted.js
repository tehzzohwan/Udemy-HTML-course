var enter = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var li = document.getElementsByTagName("li");

function lengthCheck() {
    return input.value.length 
}
 
function createLIst() {
    var li = document.createElement("li");
        li.appendChild(document.createTextNode(input.value));
        ul.appendChild(li);
        input.value = "";
}

function addListAfterClick() {
    if ( lengthCheck() > 0) {
        createLIst();
    }
}

function addListAfterKeypress(e) {
    if (lengthCheck() > 0 && e.keyCode === 13){
        createLIst();
    }
}

enter.addEventListener('click', addListAfterClick);    

input.addEventListener('keypress', addListAfterKeypress);    

// a refactoring of code was done so as to follow the DRY principle