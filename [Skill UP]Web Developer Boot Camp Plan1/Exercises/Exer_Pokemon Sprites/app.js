// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png
/*
for (let x = 0; x < 100; x++) {
    //create button
    const btn = document.createElement('button');
    btn.innerText = "Hey";

    //append button
    const div = document.querySelector('div');
    div.appendChild(btn);



}*/

const container = document.querySelector('#container');
let baseUrl = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'
for (let x = 1; x < 151; x++) {
    const pokemon = document.createElement('div');
    pokemon.classList.add('pokemon');
    const label = document.createElement('span');
    label.innerText = `#${x}`;
    const newImg = document.createElement('img');
    newImg.src = `${baseUrl}${x}.png`;
    pokemon.appendChild(newImg);
    pokemon.appendChild(label);
    container.appendChild(pokemon);
}
