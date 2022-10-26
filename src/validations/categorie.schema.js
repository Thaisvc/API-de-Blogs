const Joi = require('joi');

const categorySchema = (body) => Joi.object({
    name: Joi.string().required(),
  }).messages({
    'string.empty': '"name" is required',
  }).validate(body);

module.exports = {
    categorySchema,
};
