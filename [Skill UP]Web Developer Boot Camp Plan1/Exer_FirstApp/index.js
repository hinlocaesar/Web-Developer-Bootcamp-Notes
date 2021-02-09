const express = require("express");
const app = express();



app.use((req, res) => {
    console.log("WE GOT A NEW REQUEST!!!");
    res.send("<h1>HALLO WE GOT YOUR REQUEST</h1>");

})


//listedn incoming request
app.listen(3000, () => {
    console.log("LISTENING ON PORT 3000");
})
