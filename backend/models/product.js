const mongoose = require("mongoose")
const schema = mongoose.Schema;

let product = new schema(
    {
        product_name:{
            type:String,
            trim:true,
            required:true
        },
        price:{
            type:Number,
            required:true,
            trim:true
        }
    },
)

module.exports = mongoose.model('Product', product);