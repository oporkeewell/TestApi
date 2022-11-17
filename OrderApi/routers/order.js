const { isLogin,isAdmin } = require('../middlewares/passportJWT')
const router = require('express').Router()
router.get('/me',isLogin, require('../controllers/order/getOrder'))
router.patch('/:id',isLogin, require('../controllers/order/patchDataStatus'))
router.get('/:id',isLogin, require('../controllers/order/getData'))

router.post('/',isLogin, require('../controllers/order/postCreate'))
router.patch('/',isLogin, require('../controllers/order/patchData'))
module.exports = router
