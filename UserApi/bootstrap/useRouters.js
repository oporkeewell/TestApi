module.exports = (app) => {
  app.use('/user', require('../routers/user'))
}
