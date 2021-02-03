const express = require('express');
var app = express();
var path = require('path');

app.use(express.static('4'));

app.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname, '/index.html'));
});

app.use('/style.css', (req, res)=>{
    res.sendFile(path.join(__dirname, '/style.css'));
});



app.listen(3000, console.log('listening'));