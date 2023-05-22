const express = require("express");
const router = express.Router();


// import controller
const {register} = require("../controllers/user")

// import midldleware
const {registerValidationRule, registerValidator} = require("../middlewares/user")

// api route
router.post("/register", registerValidationRule(), registerValidator ,register);

module.exports = router;
