const { StatusCodes:http } = require('http-status-codes');
module.exports = [
   async (req, res, next) => {
      try {
          return  res
          .status(http.OK)
          .json({payload:req.user
            });
      } catch (error) {
         return next(error)
      }
    }
]
