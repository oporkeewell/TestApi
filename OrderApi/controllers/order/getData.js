const Orders = require('../../models/Orders')
const { StatusCodes:http } = require('http-status-codes');
const axios = require('axios');
module.exports = [
  async (req, res, next) => {
    try {
      const {id} = req.params;
      const data = await Orders.findById(id);
      if (!data){
        return res
        .status(http.NOT_FOUND)
        .json({message: 'data not found'});
    }
    const config = {
      headers: { Authorization: `${req.headers.authorization}`,'Content-Type': 'application/json' }
    };
    const { data:dataProduct } = await axios.get(
      `${process.env.PRODUCT_API_URL}/product/`,
      config
      );
      let product =  data.product.map((p) => {
        const dtl = dataProduct.payload.filter((x)=>`${x._id}` === `${p.id}`)
        return {
          id:p.id,
          qty:p.qty,
          name:dtl[0].name,
          price:dtl[0].price
        }
      })
      const payload = {
        _id:data._id,
        name:req.user.name,
        product,
        status:data.status
      }
      return  res
      .status(http.OK)
      .json({
        payload
        });
    } catch (error) {
       return next(error)
    }
  }
]
