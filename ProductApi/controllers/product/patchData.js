const Products = require('../../models/Products')
const { StatusCodes:http } = require('http-status-codes');
const validateUpdateProduct = require('../../validates/validateUpdateProduct');
module.exports = [
  validateUpdateProduct,
    async (req, res,next) => {
        try {
          const { id,name,price } = req.body;
          const data = await Products.findById(id);
            if (!data){
                return res
                .status(http.NOT_FOUND)
                .json({message: 'data not found'});
            }
            const chkdata = await Products.findOne({$and: [
              { _id: { $ne: id } },
              { name }
            ]});
            if (chkdata){
                return res
                .status(http.NOT_FOUND)
                .json({message: 'name is already in use.'});
            }
            data.name = name;
            data.price = price;
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
