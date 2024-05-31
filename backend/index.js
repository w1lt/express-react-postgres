const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const sequelize = require("./models");

const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes");
const adminRoutes = require("./routes/adminRoutes");

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Use the /api prefix for API routes
app.use("/api/auth", authRoutes);
app.use("/api/user", userRoutes);
app.use("/api/admin", adminRoutes);

sequelize.sync();

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
