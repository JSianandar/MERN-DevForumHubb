// Express server
const express = require("express");
const connectDB = require("./config/db");

const app = express();
const PORT = process.env.PORT || 5050;

//Connect Database
connectDB();

//Landing Page route
app.get("/", (req, res) => res.send("API Running"));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
