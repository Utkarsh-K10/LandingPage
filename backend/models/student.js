const mongoose = require("mongoose");
const schema = mongoose.Schema;

let studentSchema = new schema({
    name:{
        type: String,
    },
    email:{
        type: String,
    },
    rollno:{
        type: Number,
    },
},{
    collection:'students'
})

module.exports = mongoose.model('Student', studentSchema);
