// const User = require("../models/user").default;
const User = require("../models/user");
const jwt = require("jsonwebtoken");
require('dotenv').config();
const bcrypt = require('bcryptjs');


exports.register = async (req, res) => {

    const {username, email, password} = req.body    

    // check if user exists
    const usernameExists = await User.findOne({
        username,
    });

    const emailExists = await User.findOne({
        email,
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
    const saltRounds = 10
    const myEncrptPass = await bcrypt.hash( password, saltRounds)

    // new user registration
    const user = await User.create({
        username,
        email,
        hashedPassword: myEncrptPass,
    })
    user.hashedPassword = undefined
    res.status(201).json({
        message: "registration successful! please login",
        user
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
// exports.login = async (req, res) => {
//     try {
//         const { email, password } = req.body

//         if (!(email && password)) {
//             res.status(401).json({
//                 error: "enter valid credentials"
//             });
//         }
//         const existUser = await user.findOne({ email })
//         if(!existUser){
//             res.status(401).json({
//                 error:"not a registered user"
//             });
//         }
        

//     } catch (error) {
//         res.status(402).json({
//             error: error
//         })
//     }
// }