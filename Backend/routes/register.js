const express = require("express");
const router = express.Router();
const { register } = require("../utils/Authentication");
router.route("/register").post(register);
module.exports = router;
