require('dotenv').config()
const Joi = require('joi');
const express = require("express");
const cors = require("cors");
const morgan = require('morgan');

const app = express();
// require routers
const db = require("./db/models");

app.use(express.json());
app.use(express.urlencoded({
    extended: false
}));
app.use(morgan("dev"));
app.use(cors());

// set port
const PORT = process.env.PORT || 8080;
// Check the database connection before starting the app.
db.sequelize
    .authenticate()
    .then(() => {
        console.log("Database connection success! Sequelize is ready to use...");
        // Start listening for connections.
        app.listen(PORT, () => console.log(`Server is live & Listening on port ${PORT}...`));
    })
    .catch((err) => {
        console.log("Database connection failure.");
        console.error(err);
    });
