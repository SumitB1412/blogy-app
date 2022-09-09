const { Router } = require("express");
const CommentModel = require("../models/Comment.model");

const commentRouter = Router();

commentRouter.get("/comments/:blogId", async (req, res) => {
  const { blogId } = req.params;
  const comments = await CommentModel.find({ blogId });
  if (!comments) {
    return res.status(401).send("Invalid blog id");
  }
  res.send(comments);
});

commentRouter.post("/new-comment/:blogId", async (req, res) => {
  const { blogId } = req.params;
  const { userId, userName, text, postTime } = req.body;
  const comment = await new CommentModel({
    blogId,
    userId,
    text,
    postTime,
    userName,
  });
  await comment.save();
  res.send("Comment added");
});

module.exports = commentRouter;
