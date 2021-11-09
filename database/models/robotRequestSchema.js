const { Joi } = require("express-validation");

const robotRequestSchema = {
  body: Joi.object({
    name: Joi.string().required(),
    image: Joi.string().required(),
    speed: Joi.number().min(0).max(10).required(),
    resiliency: Joi.number().min(0).max(10).required(),
    creationDate: Joi.string().required(),
  }),
};

module.exports = { robotRequestSchema };
