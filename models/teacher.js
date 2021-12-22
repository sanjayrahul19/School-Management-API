const mongoose = require("mongoose");

const Teacher = mongoose.model("teachers", {
  teacherName: {
    type: String,
    required: true,
  },
  qualification: {
    type: String,
    required: true,
  },
  experience: {
    type: String,
    default: 0,
  },
  contact: {
    type: Number,
    required: true,
  },
});

module.exports = Teacher;
