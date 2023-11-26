const express = require("express")
const cors = require("cors")

const app = express()

// Controllers

const clothesController = require("./controllers/clothesController");

// app.use(cors())
// app.use(express.json())

// app.use("/clothes", clothesController)

// app.get("/", (req, res) => {
//     res.send("This is the back-end for Fitmaster.")
// })

// app.get("*", (req, res) => {
//     res.status(404).json({ status: "error", data: "No such route exists."})
// })

module.exports = app