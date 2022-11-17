const Orders = require('../../models/Orders')
const { StatusCodes:http } = require('http-status-codes');
const validateOrder = require('../../validates/validateOrder');
module.exports = [
    validateOrder,
    async (req, res,next) => {
        try {
          const { product } = req.body;
          const userid = req.user.id;
          const data = await Orders.create({
              userid,
              product
            });
            return res
            .status(http.CREATED)
            .json({
              message: "created successfully",
              payload: data,
            });
        } catch (error) {
            next(error)
        }
    }]
