const Users = require('../../models/Users')
const { StatusCodes:http } = require('http-status-codes');
const validateRegister = require('../../validates/validateRegister');

module.exports = [
    validateRegister,
    async (req, res,next) => {
        try {
            const { username,name,password,confirmpassword,role } = req.body;
            if (password !== confirmpassword){
              return res
              .status(http.NOT_FOUND)
              .json({message: 'confirm password incorrect'});
            }
            const chkdata = await Users.findOne({ username });
            if (chkdata){
                return res
                .status(http.NOT_FOUND)
                .json({message: 'username is already in use.'});
            }
            await Users.create({
              username,
              name,
              password,
              role,
            });
            return res
            .status(http.CREATED)
            .json({
              message: "created successfully",
              //payload:data
            });
        } catch (error) {
            next(error)
        }
    }]
