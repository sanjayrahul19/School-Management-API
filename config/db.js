const mongoose = require("mongoose");
const url =
  "mongodb+srv://sanjayrahul:1234567890@cluster0.c1oms.mongodb.net/SchoolManagementAPI?retryWrites=true&w=majority";

const db = async () => {
  try {
    const mongoDB = await mongoose.connect(url);
    console.log(`mongoDB connected:${mongoDB.connection.host}`);
  } catch (err) {
    console.log(err);
  }
};

module.exports = db;
