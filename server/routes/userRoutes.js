const express = require("express");
const { validate } = require("express-validation");
const loginUser = require("../controller/userController");
const { loginRequestSchema } = require("../../database/models/loginUserSchema");

const router = express.Router();

router.post("/login", validate(loginRequestSchema), loginUser);

module.exports = router;
