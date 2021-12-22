const mongoose = require("mongoose");

const Student = mongoose.model("students", {
  studentName: {
    type: String,
    required: true,
  },
  enrollmentDate: {
    type: String,
    required: true,
  },
  classId: {
    type: mongoose.Types.ObjectId,
    ref: "class",
  },
  classTeacherId: {
    type: mongoose.Types.ObjectId,
    ref: "teachers",
  },
  address: {
    type: String,
    required: true,
  },
  contact: {
    type: Number,
    required: true,
  },
});

module.exports = Student;
