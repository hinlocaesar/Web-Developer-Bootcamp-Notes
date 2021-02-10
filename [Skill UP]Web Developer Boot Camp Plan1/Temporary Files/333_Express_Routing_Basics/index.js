const express = require("express");
const app = express();

/*
app.use((req, res) => {
    console.log("We Got a new Request");
    res.send("<h1>Hello I got a request</h1>");
})
*/


app.get('/', (req, res) => {
    console.log("Root Request!!");
    res.send("This is the home page");
})

//generic pattern like reddit
app.get('/r/:subreddit', (req, res) => {
    const { subreddit } = req.params;
    res.send(`[LOG] ${subreddit}`);
})

//generic pattern like reddit
app.get('/r/:subreddit/:PostId', (req, res) => {
    const { subreddit, PostId } = req.params;
    res.send(`[LOG] ${subreddit} ${PostId}`);
})

app.get('/cats', (req, res) => {
    console.log("Cat Request!!");
    res.send("Meow");
})

app.get('/dogs', (req, res) => {
    console.log("Dog Request!!");
    res.send("Woof");
})

app.post('/dogs', (req, res) => {
    console.log("Dog Request POST REQUEST!!");
    res.send("Woof POST!");
})

app.get('/search', (req, res) => {
    const { q } = req.query;
    res.send(`Search result for: ${q}`);
})

app.get('*', (req, res) => {
    console.log("I dont know that path!!");
    res.send("I dont know that path!");
})

app.listen(3000, () => {
    console.log("LISTENING ON PORT 3000");
})