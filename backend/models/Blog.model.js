const mongoose = require("mongoose");

const BlogSchema = mongoose.Schema({
    authorId: { type: String, required: true },
    title: { type: String, required: true },
    subTitle: { type: String, required: true },
    body: { type: String, required: true },
    date: { type: String, required: true },
    tags: { type: Array, required: true },
    numLikes: { type: Number, default: 0 },
    numComments: { type: Array, default: 0 }
})

const BlogModel = mongoose.model("blog", BlogSchema);

module.exports = BlogModel;