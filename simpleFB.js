var database =  [
    {
        username: 'polo',
        password: 'polopee'
    }, 
    {
        username: 'jim',
        password: "1234" 
    },
    {
        username: 'ladi',
        password: "129" 
    }
];

var newsfeed = [
    {
        username: 'Ugo',
        timeline: 'Kinda in lav at the moment'
    },
    {
        username: 'Agbo',
        timeline: "I'm in yamasokoro"
    },
    {
        username: 'Dupe',
        timeline: 'On a low is the new lifestyle'
    }
];

var promptUser = prompt("What's your username");
var promptPass = prompt("Enter your password");

function isUserValid(user, pass) {
    for (var i = 0; i < database.length; i++) {
        if (database[i].username === user && database[i].password === pass) {
            return true;
        }
    } return false;
}

function signIn(user, pass) {
if (isUserValid(user, pass)) {
    console.log(newsfeed);
} else {
    alert('Sorry, password incorrect');
}
}

signIn(promptUser, promptPass);