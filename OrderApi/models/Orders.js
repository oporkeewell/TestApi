const { Schema, model,ObjectId } = require('mongoose')
const ProductSchema = new Schema({
  id: {
    type:ObjectId,
    required: true,
  },
  qty: {
    type: Number,
     default: 0,
  },
});
const schema = new Schema({
  userid: {
    type:ObjectId,
    required: true,
  },
  product: {
    type: [ProductSchema],
    default: undefined,
  },
  status: {
    type: Number,
     default: 1,
  },

}, { timestamps: true })

module.exports = model('Orders', schema)
