const { connect } = require('mongoose')

require('../models/Products')
module.exports = async () => {
  await connect(process.env.MONGODB_URL,{
    authSource: "admin",
  })
}
