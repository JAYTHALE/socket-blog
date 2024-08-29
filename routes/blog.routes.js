const { readblog, createblog, upadteblog, deleteblog } = require("../controller/blog.controller")

const router = require("express").Router()

router
    .get("/", readblog)
    .post("/add", createblog)
    .put("/update/:id", upadteblog)
    .delete("/delete/:id", deleteblog)

module.exports = router