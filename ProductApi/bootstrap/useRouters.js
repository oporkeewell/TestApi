const { isLogin } = require('../middlewares/passportJWT')

module.exports = (app) => {
  app.use('/product', require('../routers/product'))
}
