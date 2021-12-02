// Express server
const express = require("express");
const connectDB = require("./config/db");

const app = express();
const PORT = process.env.PORT || 5050;

//Connect Database
connectDB();

//Landing Page route
app.get("/", (req, res) => res.send("API Running"));

// Defining our Routes
// User Routes
app.use("/api/users", require("./routes/api/users"));
// Auth Routes
app.use("/api/auth", require("./routes/api/auth"));
// Profile Routes
app.use("/api/profile", require("./routes/api/profile"));
// Posts Routes
app.use("/api/posts", require("./routes/api/posts"));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
