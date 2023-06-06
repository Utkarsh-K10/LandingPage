const express = require("express");
const router = express.Router();


// import controller
const {addproduct} = require('../controllers/product')
// import middleware

// api routes
router.post('/addproduct', addproduct)