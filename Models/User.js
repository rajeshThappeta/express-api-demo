const mongoose = require("mongoose");
const { Schema } = mongoose;

//define user schema
const userSchema = new Schema({
  username: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
});

//create model
const User=mongoose.model('user',userSchema)


module.exports=User