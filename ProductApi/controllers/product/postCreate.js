const Products = require('../../models/Products')
const { StatusCodes:http } = require('http-status-codes');
const validateProduct = require('../../validates/validateProduct');
const axios = require('axios');
module.exports = [
  validateProduct,
    async (req, res,next) => {
        try {
          const { name,price } = req.body;
          const chkdata = await Products.findOne({ name });
            if (chkdata){
                return res
                .status(http.NOT_FOUND)
                .json({message: 'name is already in use.'});
            }
            await Products.create({
              name,
              price
            });
            return res
            .status(http.CREATED)
            .json({
              message: "created successfully",
            });
        } catch (error) {
            next(error)
        }
    }]
