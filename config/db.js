// for MongoDB purposes
const mongoose = require("mongoose");
// Config
const config = require("config");
// getting the mongoDB connection URI
const db = config.get("mongoURI");

const connectDB = async () => {
  try {
    await mongoose.connect(db);

    console.log("MongoDB Connected...");
  } catch (e) {
    console.error(e.message);
    //Exit process with failure
    process.exit(1);
  }
};

module.exports = connectDB;
