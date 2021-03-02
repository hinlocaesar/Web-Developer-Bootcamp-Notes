const express = require("express");
const path = require('path'); //configure setting directory 340
const app = express();
const { v4: uuid } = require('uuid'); //npm package to create random string for ids
uuid(); // ⇨ '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed'uuidv4(); // ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'
const methodOVerride = require('method-override')

//source code is used to modift resykt
//tell express how to parse it
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
app.use(express.json())
app.use(methodOVerride('_method'))
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')


let comments = [
    {
        id: uuid(),
        username: 'Todd',
        comment: 'lol that is so funny'
    },

    {
        id: uuid(),
        username: 'Caesar',
        comment: 'Hi My Name is Caesar'
    },

    {
        id: uuid(),
        username: 'Yssa',
        comment: 'I love Kaknin'
    }
]

//display all comments
app.get('/comments', (req, res) => {
    res.render('comments/index', { comments })

})

//render form 
app.get('/comments/new', (req, res) => {
    res.render('comments/new')
})

//submit post request
app.post('/comments', (req, res) => {
    console.log(req.body)
    const { username, comment } = req.body;
    comments.push({ username, comment, id: uuid() })
    res.redirect('/comments') //this will request again and redirect you to comments page
})

//show details
app.get('/comments/:id', (req, res) => {
    const { id } = req.params;
    const comment = comments.find(c => c.id === id);
    res.render('comments/show', { comment })
})

//render form for update
app.get('/comments/:id/edit', (req, res) => {
    const { id } = req.params;
    const comment = comments.find(c => c.id === id);
    res.render('comments/edit', { comment })
})



//update comment
app.patch('/comments/:id', (req, res) => {
    const { id } = req.params;
    const newCommentText = req.body.comment
    const foundComment = comments.find(c => c.id === id);
    foundComment.comment = newCommentText;
    res.redirect('/comments') //this will request again and redirect you to comments page
})

//delete comment
app.delete('/comments/:id', (req, res) => {
    const { id } = req.params;
    comments = comments.filter(c => c.id !== id)
    res.redirect('/comments') //this will request again and redirect you to comments page
})



app.get('/tacos', (req, res) => {
    res.send("Get tacos response");
})

app.post('/tacos', (req, res) => {
    const { meat, qty } = req.body; //search definityion of req.body
    res.send(`OK I RECEIVED: ${meat} ${qty}`);
})

app.listen(3000, () => {
    console.log("Listening on PORT 3000");
})