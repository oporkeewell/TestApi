const { connect } = require('mongoose')

require('../models/Users')
module.exports = async () => {
  await connect(process.env.MONGODB_URL,{
    authSource: "admin",
  })
}
