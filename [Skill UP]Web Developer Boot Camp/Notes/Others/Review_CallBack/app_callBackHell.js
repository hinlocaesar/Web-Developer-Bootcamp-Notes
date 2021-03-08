
//FAKE IMEPLEMENTATION TO SIMPULATE RETREVIAL OF DATA FROM DB
//IMPLEMENTATION OF CALLBACK HELL
console.log("[HINLO LOG]Start")

function loginUser(email, callback) {
    setTimeout(() => {
        callback({ userEmail: email })
    }, 3000)
}


function func_Movies(email, callback) {
    setTimeout(() => {
        callback(["Harry Potter", "Lord of the rings", "movie3"])
    }, 1000)
}

function func_MovieDetails(moviename, callback) {
    setTimeout(() => {
        callback(["SAFE", "NOT SAFE", "movie3"])
    }, 1000)

}

loginUser("caesar.hinlo@gmail.com", (user) => {
    console.log(user);
    func_Movies(user.userEmail, (movie) => {
        console.log(movie[0]);
        func_MovieDetails(movie[0], (data) => {
            console.log(data[1]);
        });
    });





});


console.log("[HINLO LOG]Finish")
