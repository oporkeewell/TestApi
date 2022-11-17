const Joi = require('joi')
const validateSchema = require('../utils/validateSchema')

const schema = Joi.object({
  id: Joi.string()
    .required()
})

module.exports = validateSchema(schema)
