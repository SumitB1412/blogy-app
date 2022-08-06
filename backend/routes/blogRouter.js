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
            const blog = await new BlogModel({ title, userId, subTitle, body, date, tags });
            await blog.save();
            res.send("Blogged saved successfully");
        }
        else {
            res.status(403).send("User Unauthorized");
        }
    } catch (err) { res.status(403).send("User Unauthorized"); }
})

module.exports = blogRouter;

// app.get("/profile/:id", async (req, res) => {
//     const { id } = req.params;
//     const token = req.headers["authorization"].split(' ')[1];
//     try {
//         const verification = jwt.verify(token, "SECRET");
//         if (verification) {
//             const user = await UserModel.findOne({ _id: id })
//             res.send({ message: "Profile page", ...user })
//         }
//         else {
//             res.send("Unauthorized user");
//         }
//     }
//     catch (err) { res.send(err) }
// })
