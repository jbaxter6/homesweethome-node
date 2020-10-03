const express = require('express');
const router = express.Router();
// const bcrypt = require("bcryptjs");
const { check } = require("express-validator");
const jwt = require("jsonwebtoken");

const { getUserToken, requireAuth } = require("../auth");

//Imports database models
const db = require("../db/models");
const listing = require('../db/models/listing');
const { User, ListUser } = db;
const { asyncHandler, handleValidationErrors } = require("../utils");

const userNotFoundError = id => {
    const err = Error(`User with id of ${id} could not be found.`);
    err.title = "User not found.";
    err.status = 404;
    return err;
};

//Checks to see if a username is provided
const validateFullName =
    check("userName")
        .exists({ checkFalsy: true })
        .withMessage("Please provide a username");

//Checks to see if email and password are provided
const validateEmailAndPassword = [
    check("email")
        .exists({ checkFalsy: true })
        .isEmail()
        .withMessage("Please provide a valid email."),
    check("password")
        .exists({ checkFalsy: true })
        .withMessage("Please provide a password.")
];

//get all users
router.get('/', (req, res) => {
    db.User.findAll({
    //     include: [{
    //         model: Pressure,
    //         as: 'pressures',
    //     }, {
    //         model: Sugar,
    //         as: 'sugars',
    // }],
    })
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving all the users."
        });
    });
    // res.send();
});

router.get('/:id', asyncHandler(async (req, res, next) => {
    const userId = parseInt(req.params.userID, 10);
    const user = await User.findByPk(userId, {
        include: [{
            model: Listing,
            as: 'listings',
        }, {
            model: Offer,
            as: 'offers'
        }]
    });

    if (user) {
        await res.send(user);
    } else {
        next(userNotFoundError(userId));
    }
}));

module.exports = router;