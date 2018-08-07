'use strict';
const nodemon = require('nodemon');
const express = require('express');
const cors = require('cors');
require('dotenv').config();
const multer = require('multer');
const app = express();



app.use(cors());
app.use('/public', express.static(process.cwd() + '/public'));

app.get('/', function (req, res) {
     res.sendFile(process.cwd() + '/views/index.html');
  });

app.listen(process.env.PORT || 3000, function () {
  console.log('Node.js listening ...');
});

let upload = multer();


app.post('/api/fileanalyse', upload.single('upfile'), function (req, res, next) {
    let name = req.file.originalname;
    let size = req.file.size;
    let type = req.file.mimetype;
    res.send({"filename":name,"type":type,"size":size});


});


