const { Joi } = require("express-validation");

const robotRequestSchema = {
  body: Joi.object({
    name: Joi.string().required(),
    image: Joi.string().required(),
    speed: Joi.number().required(),
    resiliency: Joi.number().required(),
    creationDate: Joi.string().required(),
  }),
};

module.exports = { robotRequestSchema };
