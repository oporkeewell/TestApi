const { isLogin } = require('../middlewares/passportJWT')

module.exports = (app) => {
  app.use('/order', require('../routers/order'))
}
