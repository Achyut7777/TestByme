const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    // email field
    email: {
      type: String,
      required: [true, "Please provide an Email!"],
      unique: [true, "Email Exist"],
    },
  
    //   password field
    password: {
      type: String,
      required: [true, "Please provide a password!"],
      unique: false,
    },
    dob: {
      type: String,
      required: false,
      unique: false,
    },
    name:{
      type: String,
      required:false,
      unique: false,
    }
  
  });

  
//create collection
const Register = new mongoose.model("Register", UserSchema);

module.exports = Register;
