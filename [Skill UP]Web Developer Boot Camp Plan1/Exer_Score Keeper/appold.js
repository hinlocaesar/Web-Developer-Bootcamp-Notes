/*//change content of h1
const h1 = document.querySelector("h1");


//Global variable of score
let gPlayer1Score = 0;
let gPlayer2Score = 0;
let gFirstTo = 5;


//function to set max round 
//** WORKING */
const option = document.querySelectorAll('option');
for (let li of option) {
    li.addEventListener('click', function () {
        console.log("OPTION set");
    });
}

//function  to check if game is reach if yes disable button W
function isMaxGame(player1, player2) {
    if (player1 >= gFirstTo | player2 >= gFirstTo) {
        console.log("[LOG] Max round reached!");
    }
}

//implement player one logic
const player1 = document.querySelector('#player1');
player1.addEventListener('click', () => {
    gPlayer1Score++;
    h1.innerText = `${gPlayer1Score} to ${gPlayer2Score}`;
    isMaxGame(gPlayer1Score, gPlayer2Score);
})

//implement player two logic
const player2 = document.querySelector('#player2');
player2.addEventListener('click', () => {
    gPlayer2Score++;
    h1.innerText = `${gPlayer1Score} to ${gPlayer2Score}`;
    isMaxGame(gPlayer1Score, gPlayer2Score);
})

//implement clear function
const reset = document.querySelector('#reset');
reset.addEventListener('click', () => {
    gPlayer1Score = 0;
    gPlayer2Score = 0;
    h1.innerText = `${gPlayer1Score} to ${gPlayer2Score}`;
})

    * /