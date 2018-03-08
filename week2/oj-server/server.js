 const express = require('express');
 const app = express();
 const mongoose = require('mongoose');
 const path = require('path');
 mongoose.connect('mongodb://chenjiahui11993:123456@ds127936.mlab.com:27936/cs503-1705test');
 const restRouter = require('./routes/rest');
 const indexRouter = require('./routes/index');
 app.use(express.static(path.join(__dirname, '../week1/public')));
 app.use("/", indexRouter);
 app.use("/api/v1", restRouter);
 app.use((req, res) => {
     res.sendFile('index.html', { root: path.join(__dirname, '../week1/public')});
 });
 app.listen(3000, () => console.log('Example app listening on port 3000!'));
