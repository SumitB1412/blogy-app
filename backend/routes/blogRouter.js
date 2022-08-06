const { Router } = require("express");
const BlogModel = require("../models/Blog.model");
const jwt = require("jsonwebtoken");
require('dotenv').config();

const blogRouter = Router();

blogRouter.get("/user/:userId", async (req, res) => {
    const { userId } = req.params;
    const blogs = await BlogModel.find({ _id: userId });
    if (!blogs) {
        return res.status(401).send({ message: "User not found" });
    }
    res.send(blogs);
})

blogRouter.post("/user/:userId/new-blog", async (req, res) => {
    const { userId } = req.params;
    const token = req.headers["authorization"].split(' ')[1];
    if (!token) return res.send("Invalid user token");
    try {
        const verification = jwt.verify(token, process.env.SECRET);
        if (verification) {
            const { title, subTitle, body, date, tags } = req.body;
            const blog = await new BlogModel({ title, authorId: userId, subTitle, body, date, tags });
            await blog.save();
            res.send("Blogged saved successfully");
        }
        else {
            res.status(403).send("User Unauthorized");
        }
    } catch (err) { res.send(err); }
})

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