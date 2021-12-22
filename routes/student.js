const router = require("express").Router();
const Student = require("../models/student");
const Class = require("../models/class");
const Teacher = require("../models/teacher");

router.get("/", (req, res) => {
  res.send("Student route is working");
});

router.post("/add", async (req, res) => {
  try {
    const data = await Student.create(req.body);
    const classData = await Class.findByIdAndUpdate(
      { _id: data.classId },
      { $push: { students: data._id }, teacher: data.classTeacherId },
      { new: true }
    );
    res.json({ student: data, class: classData });
  } catch (err) {
    res.json({ msg: err.message });
  }
});

router.get("/all", async (req, res) => {
  try {
    const datas = await Student.find({})
      .populate("classTeacherId", "-_id teacherName contact")
      .populate("classId", "-_id className")
      .select("studentName -_id");
    res.json(datas);
  } catch (err) {
    res.json({ msg: err.message });
  }
});

module.exports = router;
