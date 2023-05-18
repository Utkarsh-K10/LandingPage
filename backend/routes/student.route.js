// importing mongeese and express
let mongoose = require("mongoose"),
    express = require("express"),
    router = express.Router();

// studnt model
let studentSchema = require('../models/student');

// CREATE  student
router.post('/create-student', (req, res, next) => {
    studentSchema.create(req.body, (error, data) => {
        if(error){
            return next(error);
        }else{
            console.log(data);
            res.json(data);
        }
    });
});

module.exports = router;