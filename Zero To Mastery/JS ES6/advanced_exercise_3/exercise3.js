// change everything below to the newer Javascript!

// let + const
let a = 'test';
const b = true;
const c = 789;
a = 'test2';


// Destructuring
let person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
};

let { fname, lNamemage, eyeColor } = person;



// Object properties
var a = 'test';
var b = true;
var c = 789;

var okObj = {
    [a]: a,
    [b]: b,
    [c]: c
};


// Template strings old
var message = "Hello " + firstName + " have I met you before? I think we met in " + city + " last summer no???";
//es6
let bestMessage = `Hello ${firstName} have I met you before? I think we met in ${city} last summer no???`

// default arguments
// default age to 10;
function isValidAge(age = 10) {
    return age
}

// Symbol
// Create a symbol: "This is my first Symbol"

// Arrow functions old
function whereAmI(username, location) {
    if (username && location) {
        return "I am not lost";
    } else {
        return "I am totally lost!";
    }
}

let whereAmI2 = (username, location) => {
    if (username && location) {
        return "I am not lost";
    } else {
        return "I am totally lost!";
    }
}