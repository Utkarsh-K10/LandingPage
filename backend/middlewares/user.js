exports.userRegisterValidator = (req, res, next) => {
    // check username 
    req.check("username",'username is required').notEmpty();

    // check email validation
    req.check("email", "email is required").notEmpty();
    req.check("email", 'Invalid Email').isEmail();
    // check password validation 
    req.check("password", 'password is required').notEmpty();
    req.check("password").isLength({min:6}).withMessage('contains atleast 6 charactars');
    req.check("password","contain one Upeer case, one lower case, one speacial charectar").match(/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&-+=()])(?=\\S+$).{6,20}$/,"i");

    // errors
    const errors = req.validationError();

    if(errors){
        const firstError = errors.map((err)=>err.msg)[0]
        return res.status(400).json({
            error:firstError,
        });
    }

    next();
};