const mongoose = require("mongoose");

const Class = mongoose.model("class", {
  className: {
    type: String,
    required: true,
  },
  students: [
    {
      type: mongoose.Types.ObjectId,
      ref: "students",
    },
  ],
  teacher: {
    type: mongoose.Types.ObjectId,
    ref: "teachers",
  },
});

module.exports = Class;
