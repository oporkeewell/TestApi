const Orders = require('../../models/Orders')
const { StatusCodes:http } = require('http-status-codes');
const validateUpdateOrder = require('../../validates/validateUpdateOrder');
module.exports = [
    async (req, res,next) => {
        try {
          const {id} = req.params;
          const data = await Orders.findById(id);
          if (!data){
            return res
            .status(http.NOT_FOUND)
            .json({message: 'data not found'});
          }
            data.status = 2;
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
