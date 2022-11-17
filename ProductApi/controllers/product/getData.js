const Products = require('../../models/Products')
const { StatusCodes:http } = require('http-status-codes');
module.exports = [
  async (req, res, next) => {
    try {
      const {id} = req.params;
      const data = await Products.findById(id);
      if (!data){
        return res
        .status(http.NOT_FOUND)
        .json({message: 'data not found'});
    }
        return  res
        .status(http.OK)
        .json({payload:data
          });
    } catch (error) {
       return next(error)
    }
  }
]
