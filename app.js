if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
}


var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const handlebars = require('express-handlebars');
var expressValidator = require('express-validator');
var flash = require('express-flash');
var session = require('express-session');
var bodyParser = require('body-parser');

//Passport using to authenticate for system
var passport = require('passport');

const fileUpload = require('express-fileupload');

//get router from folder router
var index = require('./routes/index');

var usersRouter = require('./routes/users');
var menuRouter = require('./routes/menu');

var app = express();

//set up some function to help handlebar can handle data in a easy way
var handlerbar = require('./app/helper/handlebarhelp/handlebarhelps');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', '.hbs');
app.engine('.hbs', handlebars({ layoutsDir: __dirname + '/views/layouts', extname: '.hbs' }));





app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'upload')));
//set up file upload image
// app.use(fileUpload());

//app use session to identify each user and information when authenticated to system
app.use(session({
    secret: process.env.SECERT_SESSION_KEY,
    resave: true,
    saveUninitialized: false
}))



/* Use flash to send infomation messeages to view */
app.use(flash());
app.use((req, res, next) => {
    app.locals.success = req.flash('success')
    app.locals.error = req.flash('error')
    app.locals.errors = req.flash('errors')
    res.locals.session = req.session;
    res.locals.user = req.user;
    next();
});


// Set Local variable for app
app.use(function(err, req, res, next) {
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    res.status(err.status || 500);
    res.render('error');
});
//configure passport
app.use(passport.initialize());
app.use(passport.session());

//Set validator using to check password, email ...
app.use(expressValidator());

//Set router is used to direct when typing link in web
app.use('/', index);
app.use('/user', usersRouter);
app.use('/menu', menuRouter)


// catch 404 and forward to error handler
app.use(function(req, res, next) {
    next(createError(404));
});

module.exports = app;