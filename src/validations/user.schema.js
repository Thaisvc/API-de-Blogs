const Joi = require('joi');

const validateBodyUser = (body) => Joi.object({
  email: Joi.string().required(),
  password: Joi.string().required(),
}).messages({
  'string.empty': 'Some required fields are missing',
}).validate(body);

const validateUser = (newUser) => Joi.object({
  displayName: Joi.string().min(8).required().messages({
    'string.min': '"displayName" length must be at least 8 characters long',
  }),
  email: Joi.string().email().required().messages({
    'string.email': '"email" must be a valid email',
  }),
  password: Joi.string().min(6).required().messages({
    'string.min': '"password" length must be at least 6 characters long',
  }),
  image: Joi.string(),
}).validate(newUser);

module.exports = { validateBodyUser, validateUser };