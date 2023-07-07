"use strict";
var express = require('express');
var mongoose = require('mongoose');
var cors = require('cors');
// const passport = require('passport');
var session = require('express-session');
require('dotenv').config();
// const reportRoutes = require('./src/routes/reportRoutes');
// const reportModel = require('./src/models/reportModel');
// const middleware = require('./src/middleware/middleware');
// const userRoute = require('./src/routes/userRoutes');
var app = express();
var db = process.env.DB_URL;
var SECRET_KEY = process.env.SECRET_KEY;
var PORT = process.env.PORT || 9999;
var DEFAULT_EXPIRATION = 3600;
//Middlewares
app.use(cors());
app.use(express.json());
app.use(session({
    secret: SECRET_KEY,
    resave: false,
    saveUninitialized: false,
}));
// MongoDB database configuration
mongoose
    .connect(db)
    .then(function () {
    console.log('Connected to DB');
    app.listen(PORT, function () {
        console.log("Server is running on port ".concat(PORT));
    });
})
    .catch(function (error) { return console.log('failed to connect mongoDB', error); });
// app.use(passport.initialize());
// app.use(passport.session());
// app.use(
//   cors({
//     origin: 'http://127.0.0.1:3000',
//     methods: 'GET,POST, PUT, DELETE',
//     credentials: true,
//   })
// );
// app.use('/users', userRoute);
// app.use('/report', reportRoutes);
module.exports = app;
