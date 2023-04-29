const basket = ['apples', 'oranges', 'bananas']
const detailedBasket = {
    apples: 5,
    oranges: 10,
    bananas: 100
}

// we have the for of looop
// it iterates through strings and arrays
for (item of basket) {
    console.log(item);
}

// for in 
// you enumerate through objects not iterate
for (item in detailedBasket) {
    console.log(item);
}

// objects are not iterable
