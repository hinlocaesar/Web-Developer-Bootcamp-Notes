const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/movieApp', { useNewUrlParser: true, useUnifiedTopology: true }).
    then(() => {
        console.log("[LOG HINLO] connection open!!");
    })
    .catch(err => {
        console.log("[LOG HINLO] Connection err!!");
        console.log(err);
    })

//1)create a schema
const movieSchema = new mongoose.Schema({
    title: String,
    year: Number,
    score: Number,
    rating: String
});

//2)tell mongoose to make model based from schema
//Note: mongoose then create a collection called movies //mongoose pluralize and lower case tomovies
const Movie = mongoose.model('Movie', movieSchema)

//create new instance of movie
const amadeus = new Movie({ title: 'Amadeus', year: 1986, score: 9.2, rating: 'R' })


//find operation





