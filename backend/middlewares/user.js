const {body, validationResult} = require("express-validator");

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

const registerValidator = (req, res, next)=>{
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

module.exports = {
    registerValidationRule,
    registerValidator
}