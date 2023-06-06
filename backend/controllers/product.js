
const newProduct = require('../models/product');

//  creating new prodtct
exports.addproduct = async(req, res) => {
    const {product_name, price} = req.body();

    // check if product exists
    const productExists =  newProduct.findOne({product_name})
    if(productExists){
        res.status(403).json({
            error:'Product already exists'
        })
    }
    const addProduct = newProduct.create({
        product_name,
        price
    })

    res.status(201).json({
        message:'product added successfully',
        product_name
    });
}