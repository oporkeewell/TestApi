const bcrypt = require('bcrypt')
const { Schema, model } = require('mongoose')

const schema = new Schema({
  username: {
    type: String,
    trim: true,
    minlength: 6,
    unique: true,
  },
  password: {
    type: String,
    trim: true,
    minlength: 6,
  },
  name: {
    type: String,
    required: true,
  },
  role:{
    type:[String],
    default:undefined,
  },
  status: {
    type: Number,
     default: 1,
  },

}, { timestamps: true })

const preSetPassword = async function (next, docs) {
  if (this.isModified && this.isModified('password')) {
    this.password = await bcrypt.hash(this.password, +process.env.SALT_ROUND)
  }
  if (Array.isArray(docs)) {
    docs = await Promise.all(
      docs.map(async (doc) => {
        doc.password = await bcrypt.hash(doc.password, +process.env.SALT_ROUND)
      })
    )
  }
  next()
}

schema.pre('save', preSetPassword)
schema.pre('updateOne', preSetPassword)
schema.pre('insertMany', preSetPassword)

schema.methods.comparePassword = async function (password) {
  const result = await bcrypt.compare(password, this.password)
  return result
}
module.exports = model('Users', schema)
