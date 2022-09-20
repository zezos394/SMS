class BookController{
    // [get] /book
    index(req, res){
        res.render('book/book_details')
    }
}
module.exports = new BookController;
