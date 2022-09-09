const express = require("express");
const cors = require("cors");
const connection = require("./db");
const authRouter = require("./routes/authRouter");
const blogRouter = require("./routes/blogRouter");
const commentRouter = require("./routes/commentRouter");
const likesRouter = require("./routes/likesRouter");

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/static", express.static("./uploads"));
app.use("/auth", authRouter);
app.use("/blogs", blogRouter);
app.use("/blogs", commentRouter);
app.use("/likes", likesRouter);

app.get("/", (req, res) => {
  res.send("Homepage");
});

app.listen(8000, async () => {
  try {
    await connection;
    console.log("connected to db");
  } catch (err) {
    console.log("error while connecting to db");
  }
  console.log("port running on http://localhost:8000");
});
