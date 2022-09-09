const mongoose = require("mongoose");

const LikesSchema = mongoose.Schema({
  blogId: { type: String, required: true },
  count: { type: Number, required: true, default: 0 },
});

const LikesModel = mongoose.model("like", LikesSchema);

module.exports = LikesModel;
