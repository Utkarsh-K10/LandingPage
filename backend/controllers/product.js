
const Product = require('../models/product');

//  creating new prodtct
exports.addproduct = async (req, res) => {
    const { product_name } = req.body;

    // check if product exists
    const productExists = await Product.findOne({ product_name })
    if (productExists) {
        res.status(403).json({
            error: 'Product already exists'
        })
    } else {
        const product = new Product(req.body)
        product.save()
            .then((doc) => {
                console.log({ doc })
                res.status(201).json({
                    message: "Product added successfully",
                    doc
                });
            })
            .catch((err) => {
                console.log(err)
            })
    }

}

// get all products
exports.getAllproducts = async (req, res) => {
    await Product.find()
        .then((doc) => {
            res.status(201).json(doc)
        })
        .catch((err)=>{
            res.status(404).json({error:err})
        })
}