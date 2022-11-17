const jwt = require("jsonwebtoken");

module.exports = async (data) =>{
    // สร้าง token
    const token = jwt.sign(
        {
            id: data._id,
            username:data.username,
            name:data.name,
            role:data?.role ,
        },
        process.env.SECRET_KEY,
        //{ expiresIn: "30s" }//30 วินาที
        { expiresIn: "1 days" }
    );
    const expires_in = jwt.decode(token);
        return {
            access_token: token,
            expires_in: expires_in.exp,
            token_type: "Bearer",
          }
}


