const User = require("../models/Users");
const passport = require("passport");
const { Strategy:JwtStrategy,ExtractJwt } = require("passport-jwt")
const opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = process.env.SECRET_KEY;

passport.use(
  new JwtStrategy(opts, async (jwt_payload, next) => {
    try {
      //console.log(jwt_payload);
      if (jwt_payload.id) {
        const user  = await User.findById(jwt_payload.id);
        if (!user) {
          return next(new Error(`User not found`), null);
        }else{
          return next(null, user);
        }
      }else{
        return next(new Error(`Auth not found`), null);
      }
    } catch (error) {
        next(error);
    }
  })
);

exports.isAdmin = (req, res, next) => {
    try {
      if (!req.user){
        return next(new Error(`Auth not found`), null);
      }
      if (!req.user.role?.includes('Admin')){
        return next(new Error(`Auth not found`), null);
      }
      return next();
    } catch (error) {
       return next(error)
    }
  }
exports.isUser = (req, res, next) => {
    try {
      if (!req.user){
        return next(new Error(`Auth not found`), null);
      }
      if (!req.user.role?.includes('User')){
        return next(new Error(`Auth not found`), null);
      }
      return next();
    } catch (error) {
       return next(error)
    }
  }
exports.isLogin = passport.authenticate("jwt", { session: false });

