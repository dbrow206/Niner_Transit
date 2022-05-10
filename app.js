var express = require('express');
var path = require('path');
var morgan = require('morgan');
var usersRouter = require('./routes/users');
var trendsRouter = require('./routes/trends');
const { getEnvironmentData } = require('worker_threads');
const fetch = require('node-fetch');
const { promiseImpl } = require('ejs');



//create The App
var app = express();

// view engine setup
let port = 3000;
let host = 'localhost';
app.set('view engine', 'ejs');


app.listen(port,  host, ()=>{
  console.log("Server is running on port", port);
});

//Middleware
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(__dirname+'/public'));
//app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/trends', trendsRouter);
//set up routes

app.get('/index', (req,res) =>{ 
  res.render('index');
});



module.exports = app

