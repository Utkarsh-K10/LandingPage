
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
        .catch((err) => {
            res.status(404).json({ error: err })
        })
}

//*get by id
exports.getbyId = async (req, res) => {
    const id = req.params.id
    await Product.findById(id)
        .then((doc) => {
            res.status(201).json(doc)
        })
        .catch((err) => {
            res.status(403).json(err)
        })
}

// replace product /edit
exports.replaceProduct = async (req, res) => {
    const id = req.params.id;
    console.log({id})
    try {
        const doc = await Product.findOneAndReplace({_id:id}, req.body, {new:true})
        res.status(201).json(doc)
    } catch (error) {
        res.status(400).json(error)
    }
}

// update products
exports.updateProduct = async(req, res) =>{
    const id = req.params.id
    console.log({id})
    try {
        const doc = await Product.findByIdAndUpdate({_id:id}, req.body, {new:true})
        res.status(201).json(doc)
    } catch (error) {
        res.status(400).json(error)        
    }
}

// delete product
exports.deleteProduct = async(req, res) => {
    const id  = req.params.id 
    try {
        // const doc = await Product.findOneAndDelete({_id:id})
        const doc = await Product.findByIdAndDelete({_id:id})
        res.status(201).json({message:"deleted successfully!"})
    } catch (error) {
        console.log(error)
        res.status(400).json(error)
    }
}