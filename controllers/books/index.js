const usersBook = require('../../models').users_book;
axios = require('axios').default;

module.exports = {

  books (req, res, next) {
    
    try { 
      return usersBook
        .findAll( {
          where: { user_id: req.session.passport.user },
          include: 'book'
        })
        .then((userBooks) => {
          const userBookArray = [];
          userBooks.forEach((userBook) => {
            userBookArray.push(userBook.dataValues)
          })
          return userBookArray
        })
        .then( (userBookArray) => res.render( "books/index", {userBookList: userBookArray, title: "Book Search", user: req.session.passport.user}))
      }
      catch {
        res.redirect('/session/new')
      }
    },

    async search (req, res) {
      // try {
      console.log('we are in search')
        axios.get(`https://www.googleapis.com/books/v1/volumes?q=Dune&key=AIzaSyCKQ0s_7lFUeJA3GSYhcsXP8tPAX9O36xQ`)
        .then(response => res.json(response));
    
        // return res.json({
        //         success: true,
        //         results
        //     })
      // } catch (err) {
      //   return res.status(500).json({
      //     success: false,
      //     message: err.message,
      //   })
      // }

    } 
};


   // fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}&key=AIzaSyCKQ0s_7lFUeJA3GSYhcsXP8tPAX9O36xQ`)
    // .then(response => response.json())
    // .then((data) => {return data.items})
    // .then((bookResults) => {
    //   for (i = 0; i < bookResults.length; i++ ) {
    //     createBookCard(bookResults[i]);
    //   }
    // });
