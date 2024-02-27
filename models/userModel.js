const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: String,
  password: Number,
});

module.exports = mongoose.model("User", userSchema);
