const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.get('/login', function(req, res){
    res.sendFile(path.join(__dirname+'/login.html'));
});

app.listen(port);