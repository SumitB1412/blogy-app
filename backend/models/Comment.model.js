const mongoose = require("mongoose");

const CommentSchema = mongoose.Schema({
    blogId: { type: String, required: true },
    postTime: { type: String, required: true },
    text: { type: String, required: true },
    userId: { type: String, required: true },
})

const CommentModel = mongoose.model("comment", CommentSchema);

module.exports = CommentModel;