var express = require('express');
var path = require('path');
var morgan = require('morgan');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
//var server = require('./server/app.py')
//create The App
var app = express();

// view engine setup
let port = 3000;
let host = 'localhost';
app.set('view engine', 'ejs');



const {Client} = require('pg')
const client = new Client({
  user:"postgres",
  password:"postgres",
  host:"hostname",
  port: 5432,
  database:"TransitData"
})

client.connect()
.then(() => console.log("Connected to posgres successfully"))
.catch(e =>console.log)
.finally(() => client.end())

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

//set up routes
app.get('/index', (req,res) =>{ 
  res.render('index');
});

app.get('/interactiveMap', (req,res)=>{
  res.render('interactiveMap');
});

app.get('/lineTrends', (req,res)=>{
  res.render('lineTrends');
});

app.get('/stopTrends', (req,res)=>{
  res.render('stopTrends');
});

app.get('/suggestions', (req,res)=>{
  res.render('suggestions');
});




module.exports = app;
