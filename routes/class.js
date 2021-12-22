const router = require("express").Router();
const Class = require("../models/class");

router.get("/", (req, res) => {
  res.send("Class router is working");
});

router.post("/add", async (req, res) => {
  try {
    const data = await Class.create(req.body);
    res.json(data);
  } catch (err) {
    res.json({ msg: err.message });
  }
});

router.get("/all", async (req, res) => {
  try {
    const datas = await Class.find({})
      .populate("students", "-_id studentName enrollmentDate")
      .populate("teacher", "-_id teacherName experience")
      .select("className -_id");
    res.json({ AllClass: datas });
  } catch (err) {
    res.json({ msg: err.message });
  }
});
module.exports = router;
