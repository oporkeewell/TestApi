const Orders = require('../../models/Orders')
const { StatusCodes:http } = require('http-status-codes');
const validateUpdateOrder = require('../../validates/validateUpdateOrder');
module.exports = [
  validateUpdateOrder,
    async (req, res,next) => {
        try {
          const { id,product } = req.body;
          const data = await Orders.findById(id);
            if (!data){
                return res
                .status(http.NOT_FOUND)
                .json({message: 'data not found'});
            }
            if (data.status != 1){
              return res
              .status(http.NOT_FOUND)
              .json({message: 'data not update'});
          }
            data.product = product;
            await data.save();
            return res
            .status(http.OK)
            .json({
              message: "update successfully",
            });
        } catch (error) {
            next(error)
        }
    }]
