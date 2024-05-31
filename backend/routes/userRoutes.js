const express = require("express");
const { verifyToken } = require("../middleware/authMiddleware");
const User = require("../models/user");

const router = express.Router();

router.get("/", verifyToken, async (req, res) => {
  try {
    const user = await User.findByPk(req.userId, {
      attributes: ["username", "role"],
    });
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
