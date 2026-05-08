require("dotenv").config();

const express = require("express");
const cors = require("cors");
const leadRoutes = require("./routes/leadRoutes");
const connectDB = require("./config/db");

const auditRoutes = require("./routes/auditRoutes");

const app = express();

connectDB();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Backend Running");
});

app.use("/api/audit", auditRoutes);
app.use("/api/leads", leadRoutes);
const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});