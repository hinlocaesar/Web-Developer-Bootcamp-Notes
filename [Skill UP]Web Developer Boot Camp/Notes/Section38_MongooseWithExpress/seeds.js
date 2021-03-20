const mongoose = require('mongoose');
const Product = require('./models/product');

mongoose.connect('mongodb://localhost:27017/farmStand', { useNewUrlParser: true, useUnifiedTopology: true }).
    then(() => {
        console.log("[LOG HINLO] MONGO connection open!!");
    })
    .catch(err => {
        console.log("[LOG HINLO] MONGO Connection err!!");
        console.log(err);
    })

/* 
const p = new Product({
 name: 'Ruby Grapefruit',
 price: 1.99,
 category: 'fruit'
})

p.save().then(p => {
 console.log(p)
}).catch(e => {
 console.log(e)
})
*/
const seedProducts = [
    {
        name: 'apple',
        price: 1.99,
        category: 'fruit'
    },

    {
        name: 'carrots',
        price: 2.99,
        category: 'vegetable'
    },

    {
        name: 'papaya',
        price: 3.99,
        category: 'fruit'
    }



]
Product.insertMany(seedProducts)
    .then(res => {
        console.log(res)
    })
    .catch(err => {
        console.log(e)
    })

