class Pets {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    eat() {
        const { name, age } = this;
        console.log(`${name} is eating and age is ${age}`);
    }
}


class Cat extends Pets {
    constructor(name, age, lives) {
        super(name, age)
        this.lives = lives;

    }

    displayLives() {
        return `Live  = ${this.lives}`;
    }
}



//
const cat = new Cat("Garfiend", 8, 9);
console.log(cat.eat());
console.log(cat.displayLives());