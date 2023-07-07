import bodyParser from "body-parser";
import morgan from "morgan";

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const session = require('express-session');


require('dotenv').config();

const chartRoute = require('./routes/chart');

const app = express();


const db = process.env.DB_URL;
const { SECRET_KEY } = process.env;
const PORT = process.env.PORT || 9999;
const DEFAULT_EXPIRATION = 3600;

//Middlewares
app.use(cors({
    origin:'https://localhost:3000'
}));
// Access-Control-Allow-Origin *

app.use(express.json());
app.use(bodyParser.json());
app.use(morgan("tiny"));
app.use(bodyParser.urlencoded({ extended: false }))
app.use(
    session({
        secret: SECRET_KEY,
        resave: false,
        saveUninitialized: false,
    })
);

mongoose
    .connect(db)
    .then(() => {
        console.log('Connected to DB');
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    })
    .catch((error:any) => console.log('failed to connect mongoDB', error));


app.use('/api/v1/chart', chartRoute);
// app.use('/report', reportRoutes);

module.exports = app;