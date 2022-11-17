const Users = require('../../models/Users')
const { StatusCodes:http } = require('http-status-codes');
module.exports = [
    async (req, res, next) => {
      try {
        const data = await Users.find();
          return  res
          .status(http.OK)
          .json({payload:data
            });
      } catch (error) {
         return next(error)
      }
    }
]
