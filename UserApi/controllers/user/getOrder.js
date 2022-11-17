const { StatusCodes:http } = require('http-status-codes');
const axios = require('axios');
module.exports = [
   async (req, res, next) => {
      try {
        const config = {
          headers: { Authorization: `${req.headers.authorization}`,'Content-Type': 'application/json' }
        };
        const { data } = await axios.get(
          `${process.env.ORDER_API_URL}/order/me`,
          config
          );
          return  res
          .status(http.OK)
          .json({payload:data.payload
            });
      } catch (error) {
         return next(error)
      }
    }
]
