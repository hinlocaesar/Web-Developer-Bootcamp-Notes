/*
function Color(r, g, b) {
    this.r = r;
    this.g = g;
    this.b = b;
    console.log(this); //this is gonna refer on the global scope
}

Color.prototype.rgb = function () {
    const { r, g, b } = this;
    return `r = ${r} g = ${g}  b = ${b}`
}


let test1 = new Color(255, 40, 100)
let test2 = new Color(255, 40, 100)
console.log(test1.rgb());
*/


class Color {
    constructor(r, g, b, name) {
        console.log("Inside Constructor!");
        this.r = r;
        this.g = g;
        this.b = b;
        this.colorName = name;
    }
    greet() {
        return `HELLO FROM ${this.colorName}`
    }

    rgb() {
        const { r, g, b } = this;
        return `${r} ${g} ${b}`
    }
}

const c1 = new Color(1, 2, 3, "red");