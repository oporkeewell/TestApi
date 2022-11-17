const { isLogin,isAdmin } = require('../middlewares/passportJWT')
const router = require('express').Router()

router.get('/:id',isLogin, require('../controllers/product/getData'))
router.get('/',isLogin, require('../controllers/product/getDataAll'))
router.post('/',isLogin,isAdmin, require('../controllers/product/postCreate'))
router.patch('/',isLogin,isAdmin, require('../controllers/product/patchData'))
module.exports = router
