const mongoose = require("mongoose");

const BlogSchema = mongoose.Schema({
    authorId: { type: String, required: true },
    authorName: { type: String, required: true },
    title: { type: String, required: true },
    image: { type: String },
    body: { type: String, required: true },
    date: { type: String, required: true },
    tags: { type: String, required: true },
})

const BlogModel = mongoose.model("blog", BlogSchema);

module.exports = BlogModel;