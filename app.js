var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var passport = require('passport');
var session = require('express-session')

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var sessionRouter = require('./routes/session');
var booksRouter = require('./routes/books');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(passport.initialize());
require('./config/passport/passport')(passport);
app.use(passport.session());
app.use(session({ resave: true ,secret: '123456' , saveUninitialized: true}));


app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/session', sessionRouter);
app.use('/books', booksRouter);
app.use(express.static('public'));


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

// empties database when server starts
if (process.env.NODE_ENV === "test") {
  const db = require("./models");
  db.sequelize.sync({ force: true }).then(() => {
    console.log("Drop and re-sync db.");
  });
};

module.exports = app;
