const { connect } = require('mongoose')

require('../models/Orders')
module.exports = async () => {
  await connect(process.env.MONGODB_URL,{
    authSource: "admin",
  })
}
