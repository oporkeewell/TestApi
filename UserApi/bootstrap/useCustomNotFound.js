
const { StatusCodes:http } = require('http-status-codes');
module.exports = (req, res, next) => {
    return res.status(http.NOT_FOUND).json({
      error: {
        status: http.NOT_FOUND,
        message: `NOT FOUND`,
      },
    });
  };
