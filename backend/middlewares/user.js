const {body, validationResult} = require("express-validator");

// user registration validation
// step -1 rules
const registerValidationRule = ()=>{
    return [
        // username validation
        body("username", "username is required").notEmpty(),

        // email validation
        body("email", "email is required").notEmpty().isEmail(),
        
        // password validation
        body("password", 'pasword is required').notEmpty(),
        body("password").isLength({min:6}).withMessage('contains atleast 6 charactars'),
        body("password","contain one Upeer case, one lower case, one speacial charectar")
        .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).{6,}$/, "i"),
    ]
}

// step-2 error handling
const registerValidator = async(req, res, next)=>{
    const errors = validationResult(req)
    if(errors.isEmpty()){
        return next()
    }
    const extractedErrors = []
    errors.array().map((err) => extractedErrors.push({ [err.param]: err.msg }))
    return res.status(400).json({
        errors:extractedErrors,
    })
}


// login middleware

module.exports = {
    registerValidationRule,
    registerValidator
}