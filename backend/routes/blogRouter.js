const { Router } = require("express");
const BlogModel = require("../models/Blog.model");
const jwt = require("jsonwebtoken");
const multer = require("multer");
require("dotenv").config();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads");
  },
  filename: function (req, file, cb) {
    console.log("Filename");
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });

const blogRouter = Router();

blogRouter.get("/all",(req,res)=>{
  const blogs = await BlogModel.find();
  if (!blogs) {
    return res.status(401).send({ message: "BLogs not found" });
  }
  res.send(blogs);
})

blogRouter.get("/:tag", async (req,res)=>{
  const {tag} = req.params;
  const blogs = await BlogModel.find({tags: tag});
  if (!blogs) {
    return res.status(401).send({ message: "BLogs not found" });
  }
  res.send(blogs);
})

blogRouter.get("/user/:userId", async (req, res) => {
  const { userId } = req.params;
  const blogs = await BlogModel.find({ authorId: userId });
  if (!blogs) {
    return res.status(401).send({ message: "User not found" });
  }
  res.send(blogs);
});

blogRouter.post(
  "/user/:userId/new-blog",
  upload.single("image"),
  async (req, res) => {
    // console.log(req.file);
    const { userId } = req.params;
    const token = req.headers["authorization"].split(" ")[1];

    if (!token) return res.send("Invalid user token");
    try {
      const verification = jwt.verify(token, process.env.SECRET);
      if (verification) {
    let date = Date();
    let currDate = date.slice(4, 15).toString();
    const { title, body, tags } = req.body;
    const imagePath = req.file.originalname;
    console.log(title, body, currDate, tags);
    const blog = await new BlogModel({
      title,
      authorId: userId,
        image: imagePath,
      body,
      date: currDate,
      tags,
    });
    await blog.save();
    res.send("Blogged saved successfully");
    }else {
        res.status(403).send("User Unauthorized");
      }
    } catch (err) {
      res.send(err);
    }
  }
);

module.exports = blogRouter;

// {
//     "title": "Demo",
//     "subTitle": "Practice",
//     "body": "something.....",
//     "date": "today",
//     "tags": [
//       "tech",
//       "new"
//     ]
//   }
