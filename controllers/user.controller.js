const User = require("../Models/User");
const bcryptjs = require("bcryptjs");


//get user data
const getUserInfo = async(req, res) => {
  //gwt user document
  let user=await User.findOne({username:req.params.username})
  res.send({ message: user });
};



//create new user
const createUser = async (req, res) => {
  //get userObj from req body
  let newUser = req.body;
  //hash password
  let hashedPassword = await bcryptjs.hash(newUser.password, 5);
  //replace plain password with hashed password
  newUser.password = hashedPassword;
  //construct user document
  let user = new User(newUser);
  //save user
  await user.save();

  res.status(201).send({ message: "New user created" });
};

//export
module.exports = { getUserInfo, createUser };
