const mongoose = require("mongoose");

const suggestion = new mongoose.Schema({
    firstname :{
        type : String,
        require : true
    },
    lastname:{
        type: String,
        require : true
    },
    email :{
        type : String,
        require : true,
        unique:true
    },
    description: {
        type: String,
        required: true
    }

})

const Register = new mongoose.model("Register",suggestion);
module.exports = Register;