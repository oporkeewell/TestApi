const path = require('path')
const dotenv = require('dotenv')
const isProd = require('./utils/isProd')
const dotenvOptions = {
  path: isProd
    ? path.join(__dirname, '.env.prod')
    : path.join(__dirname, '.env.dev')
}

dotenv.config(dotenvOptions)

const { PORT } = process.env

const app = require('./bootstrap/express')
const connectMongoDB = require('./bootstrap/connectMongoDB')

const startApp = async () => {
  try {
    await connectMongoDB()
    app.listen(PORT, () => {
      console.log(`App listening on http://localhost:${PORT}/`)
    })
  } catch (error) {
    console.error(new Date(), error)
    process.exit(1)
  }
}

startApp()
