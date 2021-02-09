
let btn = document.querySelector('button');
let h1 = document.querySelector('h1');
btn.addEventListener('click', () => {
    let newColor = generateRandColor();
    document.body.style.backgroundColor = newColor;
    h1.innerText = newColor;


});


function generateRandColor() {
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);
    return `rgb(${r},${g},${b})`; 25
}