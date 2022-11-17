const Joi = require('joi')
const validateSchema = require('../utils/validateSchema')

const schema = Joi.object({
  id: Joi.string()
    .required()
    ,
    product: Joi.array()
    .items(Joi.object().keys({
      id: Joi.string().hex().length(24).required(),
      qty:Joi.number().required()
    })).required()
})

module.exports = validateSchema(schema)
