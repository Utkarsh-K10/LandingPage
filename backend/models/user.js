const mongoose = require("mongoose");
const uuid = require("uuidv1");
const crypto = require("crypto")
const schema = mongoose.Schema;

let userSchema = new schema({
    username:{
        type: String,
        required: true,
        trim: true,
        unique: true,
        lowercase:true,
    },
    email:{
        type: String,
        required: true,
        trim: true,
        unique: true,
        lowercase:true,
    },
    hashedPassword:{
        type:String,
        required: true
    },

    salt:String
},
{
    collection:'schoolusers',
    timestamps:true,
})

userSchema.virtual("password").set(function (password){
    // creating temp variable password
    this._password = password;

    // generate timestamp uuid gives unix timestamp
    this.salt = uuid();

    // encrypt password function call
    this.hashedPassword = this.encryptPassword(password);

})

userSchema.methods = {
    encryptPassword:function (password) {
        if(!password) return "";
        try {
            crypto.createHmac('sha256', this.salt ).update(password).digest("hex")
        } catch (error) {
            return "";
        }
    },
    authenticate: function (plainText){
        this.encryptPassword(plainText) === this.hashedPassword;
    },
};

module.exports = mongoose.model('User', userSchema);
