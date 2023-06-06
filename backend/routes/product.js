const express = require("express");
const router = express.Router();


// import controller
const {addproduct, getAllproducts} = require('../controllers/product');

// import middleware


// api routes
router.post('/addproduct', addproduct)
router.get('/getallproducts', getAllproducts)

module.exports = router;
// exports.router = router;