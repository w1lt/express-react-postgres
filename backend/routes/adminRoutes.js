const express = require("express");
const {
  getAllUsers,
  addUser,
  deleteUser,
} = require("../controllers/adminController");
const { verifyToken, isAdmin } = require("../middleware/authMiddleware");

const router = express.Router();

router.get("/users", verifyToken, isAdmin, getAllUsers);
router.post("/users", verifyToken, isAdmin, addUser);
router.delete("/users/:id", verifyToken, isAdmin, deleteUser);

module.exports = router;
