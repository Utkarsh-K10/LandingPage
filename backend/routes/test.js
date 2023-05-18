const express = require("express");
const router = express.Router();

// import controllers
const {getTest} = require("../controllers/test");

// import middlewares

// api route
router.get('/student', getTest);

module.exports = router;