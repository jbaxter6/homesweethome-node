require('dotenv').config()
const Joi = require('joi');
const express = require("express");
const cors = require("cors");
const morgan = require('morgan');

const app = express();