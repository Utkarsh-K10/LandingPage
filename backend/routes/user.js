const express = require("express");
const router = express.Router();
const register = require("../controllers/user")
// import controller

// import midldleware

// api route
router.post("/register", register);

module.exports = router;
