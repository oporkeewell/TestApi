const Products = require('../../models/Products')
const { StatusCodes:http } = require('http-status-codes');
module.exports = [
  async (req, res, next) => {
    try {
      const data = await Products.find();
        return  res
        .status(http.OK)
        .json({payload:data
          });
    } catch (error) {
       return next(error)
    }
  }
]
