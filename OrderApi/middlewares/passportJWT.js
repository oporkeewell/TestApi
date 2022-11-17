const passport = require("passport");
const { Strategy:JwtStrategy,ExtractJwt } = require("passport-jwt")
const axios = require('axios');
const opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = process.env.SECRET_KEY;

passport.use(
  new JwtStrategy(opts, async (jwt_payload, next) => {
    try {
      if (jwt_payload.id) {
        next(null,jwt_payload);
      }else{
        return next(new Error(`Auth not found`), null);
      }
    } catch (error) {
        next(error);
    }
  })
);
exports.isAdmin = async (req, res, next) => {
    try {
      const config = {
        headers: { Authorization: `${req.headers.authorization}`,'Content-Type': 'application/json' }
      };
      const { data } = await axios.get(
        `${process.env.USER_API_URL}/user/auth`,
        config
        );
      if (!data.payload){
        return next(new Error(`Auth not found`), null);
      }
      if (!data.payload.role?.includes('Admin')){
        return next(new Error(`Auth not found`), null);
      }
      req.user = data.payload
      return next();
    } catch (error) {
       return next(error)
    }
  }
exports.isUser = async (req, res, next) => {
    try {
      const config = {
        headers: { Authorization: `${req.headers.authorization}`,'Content-Type': 'application/json' }
      };
      const { data } = await axios.get(
        `${process.env.USER_API_URL}/user/auth`,
        config
        );
      if (!data.payload){
        return next(new Error(`Auth not found`), null);
      }
      if (!data.payload.role?.includes('User')){
        return next(new Error(`Auth not found`), null);
      }
      req.user = data.payload
      return next();
    } catch (error) {
       return next(error)
    }
  }
exports.isLogin = passport.authenticate("jwt", { session: false });

