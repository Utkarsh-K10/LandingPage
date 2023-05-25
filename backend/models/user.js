// import { Schema, model } from "mongoose";
const mongoose = require("mongoose")
const schema = mongoose.Schema;
const jwt = require("jsonwebtoken")
require("dotenv")

let userSchema = new schema({
    username: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        lowercase: true,
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        lowercase: true,
    },

    hashedPassword: {
        type: String,
        required: true
    },

    tokens:[{
        token: {
            type: String,
            default: null
        },
    }]  
},
    {
        timestamps: true,
    })

// userSchema.virtual("password").set(function (password) {
//     // creating temp variable password
//     this._password = password;

//     // encrypt password function call
//     this.hashedPassword = this.encryptPassword(password);
//     console.log(this.hashedPassword);

// })
userSchema.methods.generateAuthtoken = async function(){
    try {
        const ttoken = jwt.sign({_id:this._id.toString()}, process.env.JWT_SCERET)
        this.tokens = this.tokens.concate({token:ttoken})
        await this.save()
        return ttoken
    } catch (error) {
        console.log(error)
    }

}
// userSchema.methods = {
//     encryptPassword: function (password) {
//         if (!password)
//             return "";
//         else{
//             bcrypt.hash(password, 10).then(hash =>password=hash).catch(err => { console.error(err.message) })
//         }
//     }
// }


//         try {
//             return crypto 
//                 .createHmac('sha256', this.salt)
//                 .update(password)
//                 .digest("hex")
//         } catch (error) {
//             return "";
//         }
//     },
//     authenticate: function (plainText) {
//         this.encryptPassword(plainText) === this.hashedPassword;
//     },
// };

module.exports = mongoose.model('User', userSchema);