const { Joi } = require("express-validation");

const loginRequestSchema = {
  body: Joi.object({
    name: Joi.string().required(),
    password: Joi.string().required(),
  }),
};

module.exports = { loginRequestSchema };
