exports.movies = function(req, res) {
  res.render('movies/new', { 
    title: 'Movies' 
  });
};

exports.add = function(req, res) {
  console.log("hello, in #add")
  // res.render('movies/new', { 
  //   title: 'Movies' 
  // });
};
