//generate joke pass header check console - Done
//add joke to list
//add listener to button

let jokelist = document.querySelector('ul')
let btn = document.querySelector('button')

btn.addEventListener('click', () => {
    generateDadJoke();
})


async function generateDadJoke() {
    let li = document.createElement('li');
    li.textContent = await generateDadJokeProxy();
    jokelist.append(li);
}

const generateDadJokeProxy = async () => {

    const config = { headers: { Accept: "application/json" } }
    let jokeresult = await axios.get("https://icanhazdadjoke.com/", config);
    return jokeresult.data.joke;
}