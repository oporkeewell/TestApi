const { Schema, model } = require('mongoose')

const schema = new Schema({

  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
     default: 0,
  },
  status: {
    type: Number,
     default: 1,
  },

}, { timestamps: true })

module.exports = model('Products', schema)
