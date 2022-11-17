const Joi = require('joi')
const validateSchema = require('../utils/validateSchema')

const schema = Joi.object({
  username: Joi.string()
    .required()
    ,
  password: Joi.string()
    .required()
})

module.exports = validateSchema(schema)
