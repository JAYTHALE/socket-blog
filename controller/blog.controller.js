const asyncHandler = require("express-async-handler")
const blog = require("../module/blog")

exports.createblog = asyncHandler(async (req, res) => {
    await blog.create(req.body)
    res.json({ message: "create Blog Success" })
})
exports.readblog = asyncHandler(async (req, res) => {
    const result = await blog.find()
    res.json({ message: "read Blog Success", result })
})
exports.upadteblog = asyncHandler(async (req, res) => {
    await blog.findByIdAndUpdate(req.params.id, req.body)
    res.json({ message: "update Blog Success" })
})
exports.deleteblog = asyncHandler(async (req, res) => {
    await blog.findByIdAndDelete(req.params.id)
    res.json({ message: "delete Blog Success" })
})
