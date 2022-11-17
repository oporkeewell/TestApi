
const { RateLimiterRedis } = require('rate-limiter-flexible');
const { StatusCodes:http } = require('http-status-codes');
const Redis = require('ioredis');
const redisClient = new Redis({ enableOfflineQueue: false });
const rateLimiter = new RateLimiterRedis({
  storeClient: redisClient,
  keyPrefix: process.env.RATELIMIT_KEY,
  points: 10, // 10 requests
  duration: 1, // per 1 second by IP
  //points: 1, // 1 requests
  //duration: 10, // per 10 second by IP
});

module.exports =  (req, res, next) => {
  //console.log(`rateLimiterMiddleware`)
     rateLimiter.consume(req.ip)
    .then(() => {
      next();
    })
    .catch(() => {
     return res
      .status(http.TOO_MANY_REQUESTS)
      .json({error: {
        status: http.TOO_MANY_REQUESTS,
        message: 'Too Many Requests',
      }});
    });
};
