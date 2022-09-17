const mongoose = require("mongoose")

const livroSchema = new mongoose.Schema ({
    title: {type: String},
    author: {type: String},
    date: {type: String},
})

module.exports = mongoose.model("Livro", livroSchema)