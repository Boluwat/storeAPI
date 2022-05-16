const express = require('express')
const router = express.Router()
const productControllers = require('../controllers/products')

router.get('/', productControllers.getAllProducts)
router.get('/static', productControllers.getProductStatic)
router.get('/query', productControllers.getAllProductsQuerry)



module.exports = router





