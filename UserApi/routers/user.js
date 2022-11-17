const { isLogin,isUser } = require('../middlewares/passportJWT')
const router = require('express').Router()

router.get('/order',isLogin,require('../controllers/user/getOrder'))
router.get('/auth',isLogin,require('../controllers/user/getData'))
router.post('/login', require('../controllers/user/postLogin'))
router.post('/register', require('../controllers/user/postRegister'))
router.get('/me', isLogin,isUser, require('../controllers/user/getProfile'))
module.exports = router
