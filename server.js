const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');

const app = express();

require('dotenv').config();
require('./config/database');

app.use(logger('dev'));
app.use(express.json());

app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')));
app.use(express.static(path.join(__dirname, 'build')));

// authentication code
// app.use(require('./config/checkToken'));

// PUT ALL API ROUTES HERE BEFORE THE 'CATCH ALL' ROUTE
app.use('/todos/', require('./routes/todos'));


// here is the 'catch all'
app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
})

const port = process.env.PORT || 3001;

app.listen(port, function() {
    console.log(`Express app up and running on port ${port}`)
});