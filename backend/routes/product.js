const router =require('express').Router()
const productCtrl = require('../controllers/proCtrl')
const auth = require('../middleware/auth')
const authAdmin =require('../middleware/authAdmin')

router.route('/products')
    .get(productCtrl.getProducts)
    .post(auth, authAdmin, productCtrl.createProduct)


router.route('/products/:id')
    .delete(auth, authAdmin, productCtrl.deleteProduct)
    .patch(auth, authAdmin, productCtrl.updateProduct)



module.exports = router