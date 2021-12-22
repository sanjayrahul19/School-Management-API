const router = require("express").Router();
const Teacher = require("../models/teacher");

router.get("/", (Req, res) => {
  res.send("Teacher route is working");
});

router.post("/add", async (req, res) => {
  try {
    const data = await Teacher.create(req.body);
    res.json(data);
  } catch (err) {
    res.json({ msg: err.message });
  }
});

module.exports = router;
