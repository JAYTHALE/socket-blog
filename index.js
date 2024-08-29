const mongoose = require("mongoose")
const cors = require("cors")
const express = require("express")
require("dotenv").config()
const path = require("path")
const { error } = require("console")

const app = express()

app.use(express.json())
app.use(express.static("dist"))
app.use(cors({ origin: true, credentials: true }))

app.use("/api/blog", require("./routes/blog.routes"))

app.use("*", (req, res) => {
    res.status(404).json({ message: "Resource Not Found" })
})
app.use("*", (err, req, res, next) => {
    console.log(err);
    res.status(404).json({ message: "Resource Not Found 404", error: err.message })
})

mongoose.connect(process.env.MONGO_URL)
mongoose.connection.once("open", () => {
    console.log("MONGO CONNECTED")
    app.listen(process.env.PORT, console.log("SERVER RUNNING")
    )
})