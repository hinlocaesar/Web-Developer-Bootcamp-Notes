/* EXAMPLE IMPLEMENTATION
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve({ user: "Caesar" })
        reject(new Error("ERROR OCCURED")); //good practice to loog error
    }, 2000)
})


promise.then(data => {
    console.log(data.user);
}).catch(err => {
    console.log(err);
    console.log(err.message);
})
*/



//FAKE IMEPLEMENTATION TO SIMPULATE RETREVIAL OF DATA FROM DB
//IMPLEMENTATION REFACTORED CODE FROM CALLBACK HELL
console.log("[HINLO LOG]Start")

function loginUser(email) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({ userEmail: email })
        }, 3000)

    })

}


function func_Movies(email) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(["Harry Potter", "Lord of the rings", "movie3"])
        }, 1000)
    })

}

function func_MovieDetails(moviename) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(["SAFE", "NOT SAFE", "movie3"])
        }, 1000)

    })

}




/* 
//CALLBACK HELL
loginUser("caesar.hinlo@gmail.com", (user) => {
    console.log(user);
    func_Movies(user.userEmail, (movie) => {
        console.log(movie[0]);
        func_MovieDetails(movie[0], (data) => {
            console.log(data[1]);
        });
    });

});
*/
/*
//PROMISES IMPLEMENTATION
loginUser("caesar.hinlo@gmail.com")
    .then(user => func_Movies(user.userEmail))
    .then(movie => func_MovieDetails(movie[0]))
    .then(data => console.log(data[0]))

   */
async function DisplayUser() {
    let user = await loginUser("caesar.hinlo@gmail.com");
    let movie = await func_Movies(user.userEmail);
    let movieDetails = await func_MovieDetails(movie[0]);
    console.log(user);
    console.log(movie);
    console.log(movieDetails);


}

DisplayUser();


console.log("[HINLO LOG]Finish")

