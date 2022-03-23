var express = require('express');
var path = require('path');
var morgan = require('morgan');
var usersRouter = require('./routes/users');
var trendsRouter = require('./routes/trends');
const { getEnvironmentData } = require('worker_threads');
const fetch = require('node-fetch');


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

app.get('/interactiveMap', (req,res)=>{
  res.render('interactiveMap');
});

app.get('/stopTrends', (req,res)=>{
  res.render('stopTrends');
});

app.get('/suggestions', (req,res)=>{
  res.render('suggestions');
});

async function getLines(color){
  const response = await fetch(
    'http://127.0.0.1:5000/lines'
  );
  var JsonData = await response.json();
  var parseData = JSON.parse((JSON.stringify(JsonData)));
  console.log(parseData[color].people);

}
getLines('Green');

module.exports = app

//const parseData = JSON.parse(JSON.stringify(JsonData))