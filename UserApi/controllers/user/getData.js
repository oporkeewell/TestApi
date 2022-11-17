const User = require('../../models/Users')
const { StatusCodes:http } = require('http-status-codes');
module.exports = [
   async (req, res, next) => {
      try {
        if (!req.user){
          return res
          .status(http.UNAUTHORIZED)
          .json({message: `Auth not found`});
        }
          return  res
          .status(http.OK)
          .json({ payload:req.user});
      } catch (error) {
         return next(error)
      }
    }
]
