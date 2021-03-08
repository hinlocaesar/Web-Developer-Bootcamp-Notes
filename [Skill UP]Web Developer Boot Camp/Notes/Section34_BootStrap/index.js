const express = require("express");
const app = express();
const path = require('path'); //configure setting directory 340
const redditData = require('./data.json'); //use for mock database call

app.use(express.static(path.join(__dirname, '/public'))) //middle ware for static files this implementation is to include css

//tell ap use ejs
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views')) //configure setting directory 340 setup only onetime


app.get('/', (req, res) => {
    res.render('home') // name of our files
})

app.get('/cats', (req, res) => {
    const cats = ['Blue', 'Rocket', 'Monty', 'Winston'] //treat this as mock data from database
    res.render('cats', { cats }) // name of our files
})

app.get('/rand', (req, res) => {
    let number = Math.floor(Math.random() * 10) + 1;
    res.render('rand', { randNum: number });
})

app.get('/r/:reddit', (req, res) => {
    const { reddit } = req.params;
    const data = redditData[reddit]; //mock database
    if (data) {
        res.render('reddit', { ...data });
    } else {
        res.render('pagenotfound', { reddit });
    }
})

app.listen(3000, () => {
    console.log("Listening on PORT 3000");
})