const usersBook = require('../../models').users_book;
const book = require('../../models').books;
const user = require('../../models').user;


exports.books = function(req, res, next) {
  console.log('the id is' + req.session.passport.user)
  return usersBook
    .findAll( {
      where: { user_id: req.session.passport.user },
      include: 'book'
     })
    // .then( (userBooks) => {
    //   console.log(userBooks)
    //   const userBookList = [];
    //   const book = require('../../models').books;
    //   userBooks.forEach( (userBook) => {
    //     var bookId = userBook.book_id;
    //     return book
    //     .findOne( {WHERE: {id: bookId } } )
    //     bookList.push(book.dataValues)
    //   })
    //   return bookList;
    // })
    .then((userBooks) => {
      const userBookArray = [];
      userBooks.forEach((userBook) => {
        userBookArray.push(userBook.dataValues)
      })
      console.log(userBookArray)
      // console.log(userBookArray)
      // const userBookList = [];
      // userBooks.forEach( (userBook) => {
      //   var bookId = userBook.book_id;
      //   return book
      //   .findOne( {WHERE: {id: bookId } } )
      //   bookList.push(book.dataValues)
      // })
      // return bookList;
    })
    // .then( (bookList) => res.render( "books/index", {bookList: bookList, title: "Book List"}));
};
