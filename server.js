const express = require("express");
const app = express();
const mongoDB = require("./config/db");
const PORT = process.env.PORT || 3000;
const teacherRouter = require("./routes/teacher");
const studentRouter = require("./routes/student");
const classRouter = require("./routes/class");

mongoDB();

app.use(express.json());
app.use("/class", classRouter);
app.use("/teacher", teacherRouter);
app.use("/student", studentRouter);

app.use("/", (req, res) => {
  res.send("its working");
});

app.listen(PORT, () => {
  console.log("Server is up and running");
});
