const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const session = require('cookie-session');

require('dotenv').config();

var app = express();

app.use(cors());

// Middleware to log the responces
app.use(morgan('dev'));

// Middleware to parse the body of the request
app.use(bodyParser.urlencoded({ extended: true, limit: '21mb' }));
app.use(bodyParser.json({ limit: '21mb' }));

app.use(session({ secret: 'DeCert', maxAge: 30000 }));

app.use(require('./logic/auth'));

app.use('/', require('./routes'));

app.use((_req, _res, next) => {
    let err = new Error('Not Found');
    err.status = 404;
    next(err);
});

app.use((err, req, res, _next) => {
    res.status(err.status || 500);
    res.json({'errors': {
      message: err.message,
      method: req.method,
      status: err.status
    }});
});

module.exports = app;