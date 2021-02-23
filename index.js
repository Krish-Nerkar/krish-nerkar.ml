const express = require("express")
const app = express()
const bodyParser = require("body-parser")

app.set("view engine", "ejs")
app.use(express.static("public"))

app.get('/', (req, res) => {
    res.render("index", {data : "EMPTY"}) 
})

app.listen(8000, () => {
    console.log("Running")
})