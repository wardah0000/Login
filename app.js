const express = require('express');
const path = require('path');
const db = require('./public/scripts/database');
const app = express();
var bodyParser = require('body-parser');
app.set('x-powered-by', false);

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static('public'))
const port = 3000;

async function dump(email, password) {
  if (email && password) {
    resp = await db.createUser(email, password);
    return resp;
  }
  return 'Unable to create user.';
};

app.use('/public', express.static(path.join(__dirname, 'public')));

app.get('/login', function(req, res) {
  res.sendFile(path.join(__dirname + '/login.html'));
});

app.get('/signup', function(req, res) {
  res.sendFile(path.join(__dirname + '/signup.html'));
});

app.post('/register', function(req, res) {
  msg = dump(req.body.email, req.body.password).then(resp => {
    res.send(resp);
  });
});


app.listen(port);