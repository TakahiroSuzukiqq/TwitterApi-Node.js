var express = require('express');
var bodyParser = require('body-parser');
// var path = require('path');
var userList = require('./user-list');
var app = express();

// app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: false }));


app.get('/', function(req, res){
  res.render('index');
});

app.post('/get_users', function(req, res){
  var screen_name = req.body.handle;
  // console.log(screen_name);  //test in the Terminal
  var screen_name = req.body.handle;

  var users = userList(res, screen_name);
  // res.render('list');
});

var server = app.listen(3000, function(){
  console.log('tw is running on http://localhost:3000')
});
