const movie = require('../../models').movie;
module.exports = { 
  add_movie (req, res, next) {
    try {
      res.render('movies/index', { 
        title: 'Add Movie',
        user_id: req.session.passport.user,
        user: req.session.passport.user
    })
  } catch {
    res.redirect('/session/new')
  }
  },

  addMovie (req, res) {
  return movie
    .create({
      movie_title: req.body.title,
      movie_director: req.body.director,
      cover_art: req.body.image,
      release_date: req.body.releaseDate,
      status: 'Unwatched.'
    })
    .then((movie) => res.redirect(`/usersMovies/${movie.id}`))
    .catch((error) => res.status(400).send(error));
  },

  search (req, res) {
     try {
      console.log(req.params)
      query = req.params.movie
      axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.TMDB_API_KEY}&query=${query}`)
      .then(response => res.json(response.results));
    } catch (err) {
      return res.status(500).json({
        success: false,
        message: err.message,
      })
    }
  } 
};
