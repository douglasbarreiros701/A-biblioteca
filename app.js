const express = require("express")
const app = express()
const mongoose = require("mongoose")
const path = require("path")
const PORT = 3000
const booksRoute = require("./routes/booksRoute")

mongoose.connect("mongodb://localhost/livrosnovos", {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  });

let db = mongoose.connection

db.on("error", ()=>{
    console.log("Houve um erro")
})
db.once("open", ()=>{
    console.log("Servidor carregado")
})

app.set("view engine", "ejs")
app.use(express.static(path.join(__dirname, "css")))
app.set("views", path.join(__dirname, "public"))
app.use(express.urlencoded({extended: true}))

app.use("/", booksRoute)

app.listen(PORT, ()=>{
    console.log("Servidor iniciado na porta " + PORT)
})