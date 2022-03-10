const exp=require("express")
const userApp=exp()

userApp.use(exp.json())
const {getUserInfo,createUser}=require("../controllers/user.controller")
//CRUD operations
userApp.get('/getuser/:username',getUserInfo)
userApp.post('/create-user',createUser)


//export
module.exports=userApp