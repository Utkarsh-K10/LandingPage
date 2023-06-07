const express = require("express");
const router = express.Router();


// import controller
const {addproduct, getAllproducts, getbyId, replaceProduct} = require('../controllers/product');

// import middleware


// api routes
router.post('/', addproduct)
router.get('/', getAllproducts)
router.get('/:id', getbyId)
router.put('/:id', replaceProduct)
module.exports = router;
// exports.router = router;