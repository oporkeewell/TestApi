const path = require('path')
const express = require('express')
var cors = require('cors')
const useRouters = require('./useRouters')
const useErrorHandler = require('./useErrorHandler')
const useCustomNotFound = require('./useCustomNotFound')
const passport = require('passport');
const logger = require('morgan');
const helmet = require('helmet');
const compression = require('compression')
const rateLimiterRedisMiddleware = require('./rateLimiterRedis');
const app = express()

app.use(cors())
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(compression())
app.use(helmet());

app.use(logger("dev"));
app.use(passport.initialize());
app.use(rateLimiterRedisMiddleware);
useRouters(app)

app.use(useCustomNotFound)
app.use(useErrorHandler)

module.exports = app
