const asyncHandler = require("express-async-handler")
const blog = require("../module/blog")
const { io } = require("../socket/socket")

exports.createblog = asyncHandler(async (req, res) => {
    await blog.create(req.body)
    const result = await Todo.find()
    io.emit("Todo-Create-Response", result)
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
    const result = await Todo.find()
    io.emit("Todo-Create-Response", result)
    res.json({ message: "delete Blog Success" })
})
