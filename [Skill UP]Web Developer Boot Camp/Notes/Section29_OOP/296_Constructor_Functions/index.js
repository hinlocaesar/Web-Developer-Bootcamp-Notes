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


let test1 = new Color(255, 40, 100) // the new keyword creates and empty object
let test2 = new Color(255, 40, 100)
console.log(test1.rgb());
