const express = require("express");
const app = express();
const mongoose = require("mongoose");
const port = 3000;
const authRoutes = require("./routes/authentication");
const protectedRoute = require("./routes/protectedRoutes");

mongoose.connect(
  "mongodb+srv://mugdhapadgelwar2002:Mugdha123@cluster0.2mjqkrn.mongodb.net/?retryWrites=true&w=majority"
);

app.use(express.json());
app.use("/auth", authRoutes);
app.use("/protected", protectedRoute);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
