const Joi = require('joi')
const validateSchema = require('../utils/validateSchema')

const schema = Joi.object({
  username: Joi.string()
  .required()
  .min(6),
  name: Joi.string()
  .required(),
  password: Joi.string()
  .required()
  .min(6),
  confirmpassword: Joi.string()
  .required()
  .min(6),
  role: Joi.array()
  .items(Joi.string())
  .required()
})

module.exports = validateSchema(schema)
