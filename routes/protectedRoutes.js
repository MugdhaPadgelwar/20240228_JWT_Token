const express = require("express");
const router = express.Router();
const User = require("../models/userModel");
const verifyToken = require("../middleware/verfication");
const bcrypt = require("bcrypt");

router.put("/change-password", verifyToken, async (req, res) => {
  try {
    const userId = req.user;
    const { oldPassword, newPassword } = req.body;

    // Find user by userId
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    // Verify old password
    const passwordMatch = await bcrypt.compare(oldPassword, user.password);
    console.log(passwordMatch);
    if (!passwordMatch) {
      return res.status(401).json({ error: "Incorrect old password" });
    }

    // Hash the new password
    const hashedNewPassword = await bcrypt.hash(newPassword, 10);

    // Update user's password
    user.password = hashedNewPassword;
    await user.save();

    res.status(200).json({ message: "Password changed successfully" });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Password change failed" });
  }
});

module.exports = router;
