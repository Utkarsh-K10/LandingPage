const User  = require("../models/user");
const jwt  = require("jsonwebtoken");
const bcrypt = require("bcrypt");
require('dotenv')

exports.register = (rew, res)=>{
    const user  = new User(req.body)
    const token = jwt.sign({email: req.body.email},process.env.JWT_SECRET ,{algorithm:"HS256"})
    const hashPass = bcrypt.hashSync(req.body.password, 10)
    user.token = token
    user.hashedPassword = hashPass
    user.save((err, doc)=>{
        if(err){
            res.status(400).json(err)
        }else{
            res.status(201).json({token})
        }
    })
    return res.status(200).json({
        message:"Succesful register"
    })
};
