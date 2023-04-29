// reference type
var object1 = { value: 10 };
var object2 = object1;
var object3 = { value: 10 };

// context
const object4 = {
    a: () => console.log(this)
}

// instantiation 
class Player {
    constructor(name, type)  {
        this.name = name;
        this.type = type;
    }
    introduce() {
        console.log(`His name is ${this.name} and he is a ${this.type}`)
    }
}
class Wizard extends Player {
    constructor(name,type) {
        super(name,type)
    }
    play() {
        console.log(``)
    }
}

const wizard = new Wizard('Shola', 'Healer');
const playerr = new Player('Bayo', 'Hitman');
