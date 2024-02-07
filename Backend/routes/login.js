const express = require("express");
const router = express.Router();
const { login } = require("../utils/Authorization");
router.route("/login").post(login);
module.exports = login;
