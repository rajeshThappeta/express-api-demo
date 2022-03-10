const exp = require("express");
const app = exp();
const userApp = require("./APIs/userApp");
const mongoose = require("mongoose");
require('dotenv').config()

const dbConnectionUrl =process.env.DBURL
  

//connect mongoose
mongoose
  .connect(dbConnectionUrl)
  .then((succuess) => console.log("DB connection success"))
  .catch((err) => console.log("err in db connection", err));

app.use("/user", userApp);

//invalid path
app.get("*", (req, res) => {
  res.send({ message: `Path ${req.path} is invalid` });
});

//Errors
app.use((err, req, res, next) => {
  res.send({ message: err.message });
});

const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
