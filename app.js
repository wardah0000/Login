const express = require('express');
const path = require('path');
const app = express();
var bodyParser = require('body-parser');
app.set('x-powered-by', false);

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static('public'))
const port = 3000;

app.use('/public', express.static(path.join(__dirname, 'public')));

app.get('/login', function(req, res) {
  res.sendFile(path.join(__dirname + '/login.html'));
});

app.get('/signup', function(req, res) {
    res.sendFile(path.join(__dirname + '/signup.html'));
  });

app.listen(port);