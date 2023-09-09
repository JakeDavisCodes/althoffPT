const express = require('express');
const morgan = require('morgan');
const path = require('path');

const app = express();

// MIDDLE WARE
app.use(morgan('dev'));
app.use(express.json());

app.use(express.static(path.join(__dirname, '../'))); // SERVE CLIENT FILES

app.get('/', (req, res) => res.redirect(301, '/home'))

app.get('/home', function(req, res){
  res.sendFile(path.join(__dirname,'../home.html'));
});
app.get('/services', function(req, res){
  res.sendFile(path.join(__dirname,'../services.html'));
});
app.get('/error', function(req, res){
  res.sendFile(path.join(__dirname,'../error.html'));
});

app.listen(3000);
console.log('LISTENING AT PORT: 3000');
