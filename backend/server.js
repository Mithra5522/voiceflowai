const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const taskRoutes = require("./routes/taskRoutes");
const authRoutes = require("./routes/authRoutes");

const app = express();

app.use(cors());
app.use(express.json());



// ================= MONGODB =================

mongoose.connect(process.env.MONGO_URI)
.then(() => {
  console.log("✅ MongoDB Connected Successfully");
})
.catch((err) => {
  console.log("❌ MongoDB Connection Error");
  console.log(err);
});



// ================= ROUTES =================

app.use("/api/tasks", taskRoutes);
app.use("/api/auth", authRoutes);



// ================= HOME =================

app.get("/", (req, res) => {

  res.send("VoiceFlow Backend Running");

});



// ================= SERVER =================

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {

  console.log(`✅ Server running on port ${PORT}`);

});