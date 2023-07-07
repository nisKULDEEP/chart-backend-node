"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var body_parser_1 = __importDefault(require("body-parser"));
var morgan_1 = __importDefault(require("morgan"));
var express = require('express');
var mongoose = require('mongoose');
var cors = require('cors');
var session = require('express-session');
require('dotenv').config();
var chartRoute = require('./routes/chart');
var app = express();
var db = process.env.DB_URL;
var SECRET_KEY = process.env.SECRET_KEY;
var PORT = process.env.PORT || 9999;
var DEFAULT_EXPIRATION = 3600;
//Middlewares
app.use(cors({
    origin: 'https://localhost:3000'
}));
// Access-Control-Allow-Origin *
app.use(express.json());
app.use(body_parser_1.default.json());
app.use((0, morgan_1.default)("tiny"));
app.use(body_parser_1.default.urlencoded({ extended: false }));
app.use(session({
    secret: SECRET_KEY,
    resave: false,
    saveUninitialized: false,
}));
mongoose
    .connect(db)
    .then(function () {
    console.log('Connected to DB');
    app.listen(PORT, function () {
        console.log("Server is running on port ".concat(PORT));
    });
})
    .catch(function (error) { return console.log('failed to connect mongoDB', error); });
app.use('/api/v1/chart', chartRoute);
// app.use('/report', reportRoutes);
module.exports = app;
