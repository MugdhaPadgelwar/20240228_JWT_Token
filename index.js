const express = require("express");
const app = express();
const mongoose = require("mongoose");
const port = 3000;
mongoose.connect(
  "mongodb+srv://mugdhapadgelwar2002:Mugdha123@cluster0.2mjqkrn.mongodb.net/?retryWrites=true&w=majority"
);

const User = require("./models/userModel");

app.use(express.json());
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
