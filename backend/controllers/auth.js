const User  = require("../models/user");
const jwt  = require("jsonwebtoken");
require('dotenv')

exports.register = (rew, res)=>{
    const user  = new User(req.body);
    const token = jwt.sign({email: req.body.email},process.env.JWT_SECRET ,{algorithm:"HS256"});
    return res.status(200).json({
        message:"Succesful register"
    })
};
