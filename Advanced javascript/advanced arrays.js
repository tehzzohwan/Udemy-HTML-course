// Advanced Arrays
const array = [1, 2, 4, 18, 30];
const double = [];
const newArray = array.forEach((num) => {
    double.push(num * 2);
})

console.log('forEach', double);

// map, filter, reduce

const mapArray = array.map(num => num * 2);

console.log('map', mapArray);

// filter 

const filterArray = array.filter(num => num > 5);

console.log('filter', filterArray);

// reduce

const reduceArray = array.reduce((accumulator, num) => {
    return accumulator + num;   
}, 0);

console.log('reduce', reduceArray);