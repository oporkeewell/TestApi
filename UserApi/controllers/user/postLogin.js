const Users = require('../../models/Users');
const genToken = require('../../utils/genToken');
const { StatusCodes:http } = require('http-status-codes');
const validateLogin = require('../../validates/validateLogin');


module.exports = [
  validateLogin,
  async (req, res, next) => {
    try {
        const { username,password } = req.body;
        const data = await Users.findOne({ username,status:1 });
        if (!data){
            return res
            .status(http.NOT_FOUND)
            .json({message: 'username wrong'});
        }
        if ( !(await data.comparePassword(password))){
            return res
            .status(http.NOT_FOUND)
            .json({message: 'password wrong'});
        }
        const payload = await genToken(data)
        return  res
        .status(http.OK)
        .json({
          message: "login successfully",
          payload,
          });
    } catch (error) {
       return next(error)
    }
  }
]
