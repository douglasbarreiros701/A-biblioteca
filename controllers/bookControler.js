const Livro = require("../models/Livro")

const addBook = async (req, res)=>{
    let book = new Livro(req.body)

    try {
        let doc = book.save()
        res.redirect("all")
    } catch (error) {
       res.send(error) 
    }
}

const allBooks = async (req, res)=>{
    try{
        let livros = await Livro.find({})
        res.render("all", {livros})
    }catch(error){
        res.send(error)
    }
}

const deleteBook = async (req, res)=>{
    let id = req.params.id
    if(!id){
        id = req.body.id
    }

    try{
        await Livro.findByIdAndDelete(id)
        res.redirect("/all")
    }catch(error){
        res.status(404).send(error)
    }
}

const loadBooks = async (req, res)=>{
    let id = req.params.id

    try{
        let doc = await Livro.findById(id)
        res.render("edit", {error: false, body: doc})

    }catch(error){
        console.log(404).send(error)
    }
}

const editBook = async (req, res)=>{
    let book = {}
    book.title = req.body.title
    book.author = req.body.author
    book.date = req.body.date

    let id = req.params.id
    if(!id){
        id = req.body.id
    }
    try{
        let doc = await Livro.findByIdAndUpdate(id, book)
        res.redirect("/all")
    }  catch (error){
        res.render("edit", {error, body: req.body})
    }
}

module.exports = {addBook, allBooks, deleteBook, loadBooks, editBook}