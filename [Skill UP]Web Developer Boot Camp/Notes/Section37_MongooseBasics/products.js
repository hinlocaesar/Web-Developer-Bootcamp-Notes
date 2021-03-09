const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/shopApp', { useNewUrlParser: true, useUnifiedTopology: true }).
    then(() => {
        console.log("[LOG HINLO] connection open!!");
    })
    .catch(err => {
        console.log("[LOG HINLO] Connection err!!");
        console.log(err);
    })


const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },

    categories: [String] //for arrays of string
})


//implementation for instance method
//this is refer
productSchema.methods.greet = function () {
    console.log("Hellow CUSTOMER!");
    console.log(`-from ${this.name}`);

}

//implementation for class method
productSchema.statics.fireSale = function () {
    return this.updateMany({ price: 0 })


}



const Product = mongoose.model('Product', productSchema);







const bike = new Product({ name: "Mountain bike", price: 3991, categories: ['Road', 'dirt'] })
bike.greet()//sample call of instance model
bike.save()
    .then(m => {
        console.log("It worked")
        console.log(m)
    })
    .catch(e => {
        console.log("Error")
        console.log(e)
    })

//run code fire sale method
Product.fireSale().then(res => console.log(res))

