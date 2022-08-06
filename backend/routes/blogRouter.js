const { Router } = require("express");
const BlogModel = require("../models/Blog.model");

const blogRouter = Router();

blogRouter.get("/:userId", async (req, res) => {
    const { userId } = req.params;
    const blogs = await BlogModel.find({ _id: userId });
    if (!blogs) {
        return res.status(401).send({ message: "User not found" });
    }
    res.send(blogs);
})

module.exports = blogRouter;