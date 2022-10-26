const Joi = require('joi');

const validateBodyUser = (body) => Joi.object({
    email: Joi.string().required(),
    password: Joi.string().required(),
  }).messages({
    'string.empty': 'Some required fields are missing',
}).validate(body);

module.exports = { validateBodyUser };