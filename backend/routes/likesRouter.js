const { Router } = require("express");
const LikesModel = require("../models/Likes.model");

const likesRouter = Router();

likesRouter.get("/:blogId", async (req, res) => {
  const { blogId } = req.params;
  const likes = await LikesModel.find({ blogId });
  if (!likes) return res.send({ message: "Not found" });
  return res.send(likes);
});

likesRouter.patch("/:blogId", async (req, res) => {
  const { blogId } = req.params;
  const numLikes = await LikesModel.find({ blogId });
  const likes = await LikesModel.updateOne(
    { blogId },
    { $set: { count: numLikes + 1 } }
  );
});

module.exports = likesRouter;
