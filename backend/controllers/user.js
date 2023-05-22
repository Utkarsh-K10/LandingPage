// const User = require("../models/user").default;
const User = require("../models/user");

exports.register = async(req, res) => {
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
        message:"registration successful! please login"
    })

};
