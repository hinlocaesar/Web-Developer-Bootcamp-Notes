const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        requried: true
    },
    price: {
        type: Number,
        requried: true,
        min: 0
    },
    category: {
        type: String,
        enum: ['fruit', 'vegetable', 'dairy'],
        lowercase: true
    }
})

const Product = mongoose.model('Product', productSchema);
module.exports = Product;