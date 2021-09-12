exports.movies = function(req, res) {
  res.render('movies/index', { 
    title: 'Movies' 
  });
};