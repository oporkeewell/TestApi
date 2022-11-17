const { StatusCodes:http } = require('http-status-codes');

module.exports = (err, req, res, next) => {
    const statusCode = err.statusCode || http.INTERNAL_SERVER_ERROR;
    return res.status(statusCode).json({
      error: {
        status: statusCode,
        message: err.message,
        validation: err.validation,
      },
    });
  };
