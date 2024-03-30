const express = require("express");
const app = express();
const PORT = 5000;
const mongoose = require("mongoose"); 
const  mongourl = require("./keys"); 
const cors= require("cors")

app.use(cors())
require('./models/model')
app.use(express.json())
app.use(require("./roots/auth"))
mongoose.connect(mongourl)

mongoose.connection.on("connected", () => {
    console.log("Successfully connected to mongoose");
});

mongoose.connection.on("error", () => {
    console.log("Not connected");
});

app.listen(PORT, () => {
    console.log("Server is running on port " + PORT);
});
