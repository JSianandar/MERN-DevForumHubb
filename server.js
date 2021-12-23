// Express server
const express = require("express");
const connectDB = require("./config/db");
const path = require("path");

const app = express();

//Connect Database
connectDB();

//Init middleware
app.use(express.json({ extended: false }));

// Defining our Routes
// User Routes
app.use("/api/users", require("./routes/api/users"));
// Auth Routes
app.use("/api/auth", require("./routes/api/auth"));
// Profile Routes
app.use("/api/profile", require("./routes/api/profile"));
// Posts Routes
app.use("/api/posts", require("./routes/api/posts"));

//Serve static assets in production
if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static("frontend/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"));
  });
}

const PORT = process.env.PORT || 5050;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
