const express = require('express');
const app = express();
const path = require('path');
const methodOverride = require('method-override')
const Product = require('./models/product');

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/farmStand', { useNewUrlParser: true, useUnifiedTopology: true }).
    then(() => {
        console.log("[LOG HINLO] MONGO connection open!!");
    })
    .catch(err => {
        console.log("[LOG HINLO] MONGO Connection err!!");
        console.log(err);
    })


app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: true }))
app.use(methodOverride('_method'))

//categories
const categories = ["fruit", "vegetable", "dairy"]

//implementation to display all products
app.get('/products', async (req, res) => {
    const products = await Product.find({})
    console.log(products);
    res.render('products/index', { products });

})

//implementation for show details
app.get('/products/:id', async (req, res) => {
    const { id } = req.params;
    const product = await Product.findById(id)
    console.log(product);
    res.render('products/show', { product });

})

//implementation to get create form
app.get('/products/new', (req, res) => {
    res.render('products/new', { categories })
})

//post impementation to submit form
app.post('/products', async (req, res) => {
    const newProduct = new Product(req.body)
    await newProduct.save();
    console.log(newProduct);
    res.redirect(`products/${newProduct._id}`);
})


//implementation to create form for update
app.get('/products/:id/edit', async (req, res) => {
    const { id } = req.params;

    const product = await Product.findById(id)
    res.render('products/edit', { product })
})


//implementation to put request update
app.put('/products/:id', async (req, res) => {
    const { id } = req.params;
    let product = await Product.findByIdAndUpdate(id, req.body, { runValidator: true, new: true });
    console.log(req.body)
    res.redirect(`/products/${product._id}`);
})





app.listen(3000, () => {
    console.log("APP IS LISTENING on PORT 3000")
})
