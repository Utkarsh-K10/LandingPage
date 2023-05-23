// const User = require("../models/user").default;
const User = require("../models/user");
const jwt = require("jsonwebtoken");
require('dotenv').config();


exports.register = async (req, res) => {
    // check if user exists
    const usernameExists = await User.findOne({
        username: req.body.username,
    });
    const emailExists = await User.findOne({
        email: req.body.email,
    });

    if (usernameExists) {
        return res.status(403).json({
            error: "username already exists",
        });
    }
    if (emailExists) {
        return res.status(403).json({
            error: "Email already exists",
        });
    }

    // new user registration
    const user = new User(req.body);
    await user.save();
    res.status(201).json({
        message: "registration successful! please login"
    })

};

exports.login = async (req, res) => {
    const { email, password } = req.body;
    await User.findOne({ email })
    .then((user) => {
        console.log(user)
        if (!user) {
            return res.status(401).json({
                error: "invalid credentials"
            })
        }
        if (!(user.authenticate(password))) {
            return res.status(401).json({
                error: "invalid email or password"
            })
        }
        // jwt generation
        const token = jwt.sign({ _id: user._id }, process.env.JSW_SECRET, { expiresIn: "24h" })
    
        // store token in cookie
        res.cookie("jwt", token, { expires: new Date(Date.now() + 9999), httpOnly: true })
    
        // destructure user 
        const { username } = user;
    
        return res.json({
            message: "login success",
            username,
        })
    }).catch((error) => {
        res.status(401).json({
            error: error
        })
    })
}
    
    // .exec((err, user) => {
    //     // no user found and error then
    //     if (err || !user) {
    //         return res.status(401).json({
    //             error: "invalid credentials",
    //         });
    //     }
    
    //     // if user found and authentication with form model 
    //     if (!user.authenticate(password)) {
    //         return res.status(401).json({
    //             error: "invalid email or password",
    //         })
    //     }
    
    //     // jwt generation
    //     const token = jwt.sign({ _id: user._id }, process.env.JSW_SECRET, { expiresIn: "24h" })
    
    //     // store token in cookie
    //     res.cookie("jwt", token, { expires: new Date(Date.now() + 9999), httpOnly: true })
    
    //     // destructure user 
    //     const { username } = user;
    
    //     return res.json({
    //         message: "login success",
    //         username,
    //     })
    // })
