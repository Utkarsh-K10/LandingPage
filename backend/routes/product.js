const express = require("express");
const router = express.Router();


// import controller
const {addproduct, getAllproducts, getbyId, replaceProduct, deleteProduct} = require('../controllers/product');

// import middleware


// api routes
router.post('/', addproduct)
router.get('/', getAllproducts)
router.get('/:id', getbyId)
router.put('/:id', replaceProduct)
router.delete('/:id', deleteProduct)

module.exports = router;
// exports.router = router;