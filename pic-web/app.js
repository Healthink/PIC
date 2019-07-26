var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var userDao=require('./dao/userDao');
var homeRouter = require('./routes/home');
var sendmailRouter = require('./routes/sendmail');
var applyhomeRouter = require('./routes/applypage');
var applypageRouter = require('./routes/applypage1');
var indexRouter = require('./routes/index');
var signgraphRouter=require(('./routes/graph_sign'));
var medgraphRouter=require(('./routes/graph_med'));
var labgraphRouter=require(('./routes/graph_lab'));
var eventgraphRouter=require(('./routes/graph_event'));
var idRouter=require(('./routes/idlist'));
var surgeryvitalgraphRouter=require(('./routes/graph_surgeryvital'));
var emrsymptomgraphRouter=require(('./routes/graph_emrsymptom'));
var filterresultRouter = require('./routes/filter_result');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/',homeRouter);
app.use('/chartsview', indexRouter);
app.use('/applyhome',applyhomeRouter);
app.use('/sendmail',sendmailRouter);
app.use('/applypage',applypageRouter);
app.use('/search/graph_sign',signgraphRouter);
app.use('/search/graph_med',medgraphRouter);
app.use('/search/graph_lab',labgraphRouter);
app.use('/search/graph_event',eventgraphRouter);
app.use('/search/id',idRouter);
app.use('/search/graph_surgeryvital',surgeryvitalgraphRouter);
app.use('/search/graph_emrsymptom',emrsymptomgraphRouter);
app.use('/filter_result',filterresultRouter);


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

module.exports = app;