const Joi = require('joi')
const validateSchema = require('../utils/validateSchema')

const schema = Joi.object({
  name: Joi.string()
    .required()
    ,
  price: Joi.number()
    .required()
})

module.exports = validateSchema(schema)
