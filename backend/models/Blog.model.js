const mongoose = require("mongoose");

const BlogSchema = mongoose.Schema({
    author: { type: String, required: true },
    authorId: { type: String, required: true },
    title: { type: String, required: true },
    subTitle: { type: String, required: true },
    body: { type: String, required: true },
    date: { type: String, required: true },
    tags: { type: Array, required: true },
    numLikes: { type: Number, required: true },
    numComments: { type: Array, required: true }
})

const BlogModel = mongoose.model("blog", BlogSchema);

module.exports = BlogModel;