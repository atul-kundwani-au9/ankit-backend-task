const express = require("express");
const dotenv = require("dotenv");
const emailRoutes = require("./routes/emailRoutes");
const mongoose = require("mongoose");
const app = express();
dotenv.config();

const mongoURL = "mongodb+srv://Aniket_Paul:C563ramdashati@cluster0.qxsgiqm.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(mongoURL,{
  useNewUrlParser : true,
}).then(()=>{
  console.log("connected to the database");
});
const cors = require("cors");
const corsOptions = {
  origin: "*",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};

app.use(cors()); // Use this after the variable declaration

app.use(express.json()); // tell the server to accept the json data from frontend

//Signup and login
app.use("/email", emailRoutes);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
