const Orders = require('../../models/Orders')
const { StatusCodes:http } = require('http-status-codes');
module.exports = [
  async (req, res, next) => {
    try {
      const data = await Orders.find();
        return  res
        .status(http.OK)
        .json({payload:data
          });
    } catch (error) {
       return next(error)
    }
  }
]
