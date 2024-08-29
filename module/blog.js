const mongoose = require("mongoose")

const blogSchema = new mongoose.Schema({
    task: { type: String, required: true },
    desc: { type: String, required: true },
    priority: { type: String, required: true },
    image: { type: String, required: true },
    complete: { type: Boolean, required: false },
}, { timestamps: true })

module.exports = mongoose.model("blog", blogSchema)