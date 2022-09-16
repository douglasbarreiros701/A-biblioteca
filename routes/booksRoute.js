const express = require("express")
const router = express.Router()
const methodOverride = require("method-override")

router.use(methodOverride("_method"))

const bookControler = require("../controllers/bookControler")

router.get("/", bookControler.allBooks)
router.get("/add", (req, res)=> res.render("add"))
router.get("/edit/:id", bookControler.loadBooks)

router.post("/",  express.urlencoded({extended: true}), bookControler.addBook)

router.post("/edit/:id", express.urlencoded({ extended: true }), bookControler.editBook)

router.delete("/:id", bookControler.deleteBook)
router.delete("/", express.urlencoded({ extended: true }), bookControler.deleteBook)

module.exports = router