const express = require("express");
const router = express.Router();


// import controller
const {register} = require("../controllers/user")

// import midldleware
const {userRegisterValidator} = require("../middlewares/user")

// api route
router.post("/register", userRegisterValidator ,register);

module.exports = router;
